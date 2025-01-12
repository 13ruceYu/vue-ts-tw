<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DarkLightSwitch from '~/components/DarkLightSwitch.vue'
</script>

<template>
  <div class="h-screen flex justify-center items-center gap-2 dark:bg-slate-800 dark:text-white">
    <div class="flex gap-2 items-center">
      <Icon icon="skill-icons:vuejs-light" class="size-8" />
      <Icon class="size-8" icon="skill-icons:typescript" />
      <Icon class="size-8" icon="skill-icons:tailwindcss-light" />
      <span>Iconify</span>
      <DarkLightSwitch />
    </div>
  </div>
</template>
