<script setup lang="ts">
import { EllipsisIcon, type LucideIcon } from "lucide-vue-next";
import { ref } from "vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GlowBorder } from "../ui/glow-border";
import { CardSpotlight } from "../ui/card-spotlight";

interface SheetContentProps {
  class?: string;

  icon?: LucideIcon;
  title?: string;
}

const props = defineProps<{
  options: SheetContentProps[];
}>();

const isOpen = ref(false);
</script>

<template>
  <Sheet :open="isOpen" v-on:update:open="isOpen = $event">
    <SheetTrigger>
      <EllipsisIcon class="h-6 w-6 cursor-pointer" />
    </SheetTrigger>
    <SheetContent
      class="z-[999999] mr-2 w-full overflow-hidden rounded-3xl border-0 outline-none sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
    >
      <GlowBorder
        :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
        :border-radius="20"
      />
      <div
        class="relative flex size-full items-center justify-center rounded-3xl p-[4px] pt-[8px]"
      >
        <CardSpotlight
          :gradient-color="'#363636'"
          class="absolute inset-0 cursor-pointer border-0 bg-inherit outline-none"
        >
          <!-- <GlowBorder
            :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
            :border-radius="20"
            class="min-w-full h-full"
          /> -->
          <SheetHeader>
            <SheetTitle> Your options </SheetTitle>
            <SheetDescription>
              You can customize your options here.
            </SheetDescription>

            <div
              v-for="(option, index) in props.options"
              :key="index"
              class="flex items-center gap-2"
            >
              <component v-if="option.icon" :is="option.icon" class="h-6 w-6" />
              <h2 class="text-lg font-semibold">{{ option.title }}</h2>
            </div>
          </SheetHeader>
        </CardSpotlight>
      </div>
    </SheetContent>
  </Sheet>
</template>
