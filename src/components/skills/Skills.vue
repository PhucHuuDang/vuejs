<template>
  <CardSpotlight class="z-50 size-full rounded-xs border-0">
    <div class="pt-10">
      <div class="flex items-center justify-center">
        <RadiantText
          class="inline-flex items-center justify-center gap-1 transition ease-out hover:text-neutral-600 hover:duration-300"
        >
          <CpuIcon class="size-7" />
          <h1 class="text-3xl font-bold italic">Tech Stack</h1>
        </RadiantText>
      </div>

      <div
        class="gird-cols-1 grid items-center justify-center gap-8 p-20 md:grid-cols-2"
      >
        <div class="flex items-center justify-center p-4">
          <AnimateGrid
            :cards="cards"
            class="b rounded-3xl"
            :perspective="100"
            :rotate-x="10"
            :rotate-y="10"
          >
            <template #logo="{ logo }">
              <img class="logo mx-auto h-10 w-auto" :src="logo" />
            </template>
          </AnimateGrid>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam
          totam ex? Id aut suscipit voluptate neque tempora, sapiente commodi
          totam harum natus labore, sequi maxime veritatis ducimus quibusdam et.
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
import { CardBody, CardContainer, CardItem } from "../ui/card-3d";

const cards = Array.from({ length: 8 }, () => ({
  logo: "/logo.png",
}));
</script>
