<template>
  <CardSpotlight class="z-50 rounded-xs border-0" slot-class="w-full">
    <div class="py-10">
      <div class="flex items-center justify-center">
        <RadiantText
          class="inline-flex items-center justify-center gap-1 transition ease-out hover:text-neutral-600 hover:duration-300"
        >
          <CpuIcon class="size-7" />
          <h1 class="text-3xl font-bold italic">Tech Stack</h1>
        </RadiantText>
      </div>

      <div class="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div class="flex w-full items-center justify-center p-4 pb-8">
          <AnimateGrid
            :cards="cards"
            :perspective="250"
            :rotate-x="5"
            :rotate-y="15"
          >
            <template #logo="{ logo, item }">
              <HoverCard :open-delay="200" class="h-full w-full">
                <HoverCardTrigger as-child>
                  <div
                    @mouseenter="handleMouseEnter({ ...item })"
                    @mouseleave="onMouseLeave"
                  >
                    <img class="logo h-16 w-auto" :src="logo" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="right"
                  align="center"
                  :side-offset="20"
                  class="border-0 bg-transparent text-lg font-semibold text-slate-200 italic"
                >
                  <p>{{ item.title }}</p>
                </HoverCardContent>
              </HoverCard>
            </template>
          </AnimateGrid>
        </div>

        <div class="flex h-full w-full items-center justify-center">
          <div
            class="motion-preset-blur-right motion-preset-focus w-full text-lg font-semibold whitespace-normal"
            v-if="hoveredCard"
          >
            <!-- <div class="min-w-20"> -->
            <TextReveal
              class="min-w-20 text-center font-mono text-3xl leading-relaxed font-light italic"
            >
              {{ hoveredCard?.description }}
            </TextReveal>
            <!-- </div> -->
          </div>
          <div
            class="motion-preset-blur-right motion-preset-focus w-full text-lg font-semibold whitespace-normal"
            v-if="!hoveredCard"
          >
            <TextReveal
              class="min-w-20 text-center font-mono text-3xl leading-relaxed font-light italic"
            >
              Languages and frameworks I've worked with!
            </TextReveal>
          </div>
        </div>
      </div>
    </div>
  </CardSpotlight>
</template>

<script setup lang="ts">
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { RadiantText } from "../ui/radiant-text";
import { CpuIcon } from "lucide-vue-next";
import { AnimateGrid } from "../ui/animate-grid";
import { useMouseEnter, useMouseLeave } from "@/store/hover";

import { TextReveal } from "../ui/text-reveal";
import { techs } from "@/icon/icon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const cards = techs.map((tech, index) => ({
  logo: tech?.logo ? tech.logo : "/logo.png",
  key: `card-${index + 1}`,
  title: tech.title,
  description: tech.description,
}));

const { handleMouseEnter, hoveredCard } = useMouseEnter();

const onMouseLeave = useMouseLeave();
</script>
