<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'

defineProps<{
  badge?: string
  eyebrow?: string
  title: string
  accent?: string
  subtitle?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-yellow px-4 pb-16 pt-16 sm:px-6 sm:pt-20">
    <div class="mx-auto max-w-3xl text-center">
      <SectionHeading center :eyebrow="eyebrow" :badge="badge" :title="title" :accent="accent" :subtitle="subtitle" />
      <slot />
    </div>
  </section>
</template>
