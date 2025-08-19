<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import { FluidCursor } from "./ui/fluid-cursor";
import { Sparkles } from "./ui/sparkles";
import { Navbar } from "./navbar";
import { ParticleImage } from "./ui/particle-image";
import TextGlitch from "./ui/text-glitch/TextGlitch.vue";
import { RainbowButton } from "./ui/rainbow-button";
import { Introduce } from "./introduce";
import { Skills } from "./skills";

const paticlesColor = computed<string>(() => {
  return useColorMode().value === "dark" ? "#FFFFFF" : "#000000";
});

const bgColor = "#141414";
defineProps<{ msg: string }>();

const canvasHeight = ref(500);

onMounted(() => {
  if (window.innerHeight < 768) {
    canvasHeight.value = 600;
  } else if (window.innerHeight < 640) {
    canvasHeight.value = 400;
  } else {
    canvasHeight.value = 900;
  }
});
</script>

<template>
  <div
    class="relative flex h-screen flex-col items-center justify-center overflow-auto"
  >
    <Navbar />

    <div class="absolute inset-0 top-0 left-0 z-0 h-full w-full">
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

    <Introduce />
  </div>
  <Skills />
  <FluidCursor />
</template>
