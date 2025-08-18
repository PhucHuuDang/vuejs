<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";
import { FluidCursor } from "./ui/fluid-cursor";
import { Sparkles } from "./ui/sparkles";
import { Navbar } from "./navbar";
import { ParticleImage } from "./ui/particle-image";

const paticlesColor = computed<string>(() => {
  return useColorMode().value === "dark" ? "#FFFFFF" : "#000000";
});

const bgColor = "#141414";
defineProps<{ msg: string }>();
</script>

<template>
  <div class="relative flex flex-col items-center justify-center h-screen">
    <Navbar />

    <div class="absolute top-0 left-0 w-full h-full z-0 inset-0">
      <Sparkles
        :background="bgColor"
        :min-size="1"
        :max-size="2"
        :particle-density="350"
        class="size-full"
        :particle-color="paticlesColor"
        :speed="0.5"
      />
    </div>

    <div
      class="z-50 flex items-center justify-center size-40 sm:size-56 md:size-72 lg:size-96 xl:size-[500px] bg-green-50"
    >
      <ParticleImage
        image-src="/avatar.png"
        class="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
        :responsive-width="true"
      />
    </div>

    <h1 class="text-4xl font-bold z-10">
      Hello, I'm <span class="text-primary">Harry</span>
    </h1>

    <FluidCursor />
  </div>
</template>
