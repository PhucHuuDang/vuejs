<template>
  <div
    class="motion-preset-shrink motion-preset-pop motion-preset-focus-lg z-50 grid grid-cols-1 md:grid-cols-2"
  >
    <div class="flex flex-col items-end justify-center">
      <div class="flex items-center gap-1">
        <h1 class="text-4xl font-bold italic">Hey there</h1>
        <div class="motion-preset-seesaw text-4xl">👋</div>
      </div>
      <TextGlitch :speed="4" :enable-shadows="true" text="I'm Harry" />

      <p class="text-md max-w-1.5/2 whitespace-pre-line text-slate-200 italic">
        I'm a Fullstack Developer with a passion for building websites and
        making them eye-catching.
      </p>

      <div class="mt-6 flex items-center justify-center gap-2">
        <RainbowButton>Contact</RainbowButton>
        <RainbowButton>Resume</RainbowButton>
      </div>
    </div>

    <div class="flex justify-center md:justify-end">
      <div class="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
        <ParticleImage
          image-src="/avatar.png"
          :responsive-width="true"
          :canvas-height="canvasHeight.toString()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RainbowButton } from "../ui/rainbow-button";
import { ParticleImage } from "../ui/particle-image";
import TextGlitch from "../ui/text-glitch/TextGlitch.vue";

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
