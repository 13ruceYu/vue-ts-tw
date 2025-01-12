<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <Icon class="size-6" :icon="isDark ? 'radix-icons:moon' : 'radix-icons:sun'" />
  </button>
</template>
