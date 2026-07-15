<script setup lang="ts">
withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })
</script>

<template>
  <div class="relative mx-auto w-[260px] sm:w-[280px]">
    <div class="rounded-[2.75rem] border-[6px] border-ink bg-ink p-2.5" style="box-shadow: var(--shadow-brut-lg)">
      <div class="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem]" :class="dark ? 'bg-ink' : 'bg-paper'">
        <div class="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink"></div>
        <div class="h-full w-full pt-9">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
