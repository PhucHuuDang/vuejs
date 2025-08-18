<script setup lang="ts">
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { Ellipsis } from "lucide-vue-next";
import SheetContent from "../sheet-content/SheetContent.vue";
</script>

<template>
  <LiquidGlass
    container-class="effect font-heading flex fixed z-[999998] w-full items-center justify-between px-6 py-3 max-w-[48rem] min-md:top-4 top-0"
  >
    <!-- <LiquidGlass container-class="fixed top-4 mx-auto z-50 min-w-[500px]"> -->
    <div class="w-full mx-auto flex items-center justify-between px-4">
      <h1
        class="font-semibold text-2xl italic cursor-pointer hover:scale-105 transition-all duration-300"
      >
        Harry
      </h1>

      <SheetContent :options="[{ icon: Ellipsis, title: 'Skills' }]" />
    </div>
  </LiquidGlass>
</template>
