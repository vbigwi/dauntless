<script setup lang="ts">
withDefaults(
  defineProps<{
    videoId?: string
    title: string
    pendingNote?: string
  }>(),
  { pendingNote: 'This submission link is pending an update from the E-Lab team — check back soon.' },
)
</script>

<template>
  <div class="relative aspect-video overflow-hidden rounded-2xl border-[3px] border-ink bg-paper" style="box-shadow: var(--shadow-brut)">
    <iframe
      v-if="videoId"
      class="h-full w-full"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
      :title="title"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div
      v-else
      class="flex h-full w-full flex-col items-center justify-center gap-3 bg-cream p-6 text-center"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-green">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-ink">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p class="font-display font-bold text-ink">Video coming soon</p>
      <p class="max-w-xs text-sm text-ink/60">{{ pendingNote }}</p>
    </div>
  </div>
</template>
