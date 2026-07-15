<script setup lang="ts">
defineProps<{ value: string; label: string; source?: string }>()
</script>

<template>
  <div>
    <p class="font-mono text-3xl font-black text-ink sm:text-4xl">{{ value }}</p>
    <p class="mt-1.5 text-sm font-medium text-ink/70">{{ label }}</p>
    <p v-if="source" class="mt-1 font-mono text-xs uppercase tracking-wide text-ink/40">{{ source }}</p>
  </div>
</template>
