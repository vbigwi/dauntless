<script setup lang="ts">
withDefaults(defineProps<{ url?: string }>(), { url: 'app.bodapay.africa' })
</script>

<template>
  <div class="brut-card overflow-hidden" style="box-shadow: var(--shadow-brut-lg)">
    <div class="flex items-center gap-2 border-b-[3px] border-ink bg-cream px-4 py-2.5">
      <span class="h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-pink"></span>
      <span class="h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-yellow"></span>
      <span class="h-3 w-3 shrink-0 rounded-full border-2 border-ink bg-green"></span>
      <span class="ml-3 flex-1 truncate rounded-md border-[3px] border-ink bg-paper px-3 py-1 font-mono text-xs text-ink/60">
        {{ url }}
      </span>
    </div>
    <div class="bg-paper">
      <slot />
    </div>
  </div>
</template>
