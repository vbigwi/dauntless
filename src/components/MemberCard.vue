<script setup lang="ts">
import type { TeamMember } from '../data/team'

defineProps<{ member: TeamMember }>()
</script>

<template>
  <div
    class="brut-card group flex flex-col items-center gap-4 p-6 text-center transition-transform duration-150 hover:-translate-y-1 sm:p-7"
  >
    <img
      v-if="member.photo"
      :src="member.photo"
      :alt="member.name"
      class="h-24 w-24 rounded-full border-[3px] border-ink object-cover"
    />
    <div
      v-else
      class="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-ink font-display text-2xl font-black text-ink"
      :style="{ background: member.color }"
    >
      {{ member.initials }}
    </div>

    <div>
      <h3 class="font-display text-lg font-bold text-ink">{{ member.name }}</h3>
      <p class="mt-1 text-sm font-bold text-ink/70">{{ member.role }}</p>
      <p class="mt-1 flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink/50">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        {{ member.country }}
      </p>
    </div>
  </div>
</template>
