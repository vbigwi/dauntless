<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    badge?: string
    title: string
    accent?: string
    subtitle?: string
    center?: boolean
  }>(),
  { center: false },
)
</script>

<template>
  <div :class="center ? 'mx-auto text-center' : ''" class="max-w-2xl">
    <p v-if="eyebrow" class="mb-4 flex flex-wrap items-center gap-2.5" :class="center ? 'justify-center' : ''">
      <span class="brut-tag -rotate-2 bg-blue">{{ eyebrow }}</span>
      <span v-if="badge" class="font-mono text-xs font-bold uppercase tracking-wide text-ink/60">{{ badge }}</span>
    </p>
    <h2 class="font-display text-3xl font-black leading-[1.35] tracking-tight text-ink sm:text-4xl md:text-5xl">
      {{ title }}
      <span
        v-if="accent"
        class="rounded-md bg-pink px-1.5 py-0.5"
        style="box-decoration-break: clone; -webkit-box-decoration-break: clone"
      >{{ accent }}</span>
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
