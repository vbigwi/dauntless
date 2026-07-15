<script setup lang="ts">
import type { Challenge } from '../data/challenges'

defineProps<{ challenge: Challenge }>()
</script>

<template>
  <div class="brut-card flex h-full flex-col p-6 sm:p-8">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink/50">
          Challenge {{ challenge.number }} · {{ challenge.tag }}
        </p>
        <h3 class="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">{{ challenge.title }}</h3>
      </div>
      <span class="shrink-0 rounded-lg border-[3px] border-ink bg-yellow px-3 py-1 font-mono text-xs font-bold text-ink">
        {{ challenge.points }}
      </span>
    </div>

    <p class="mt-4 rounded-xl border-[3px] border-ink/10 bg-cream p-4 text-sm leading-relaxed text-ink/70">
      <span class="font-bold text-ink">Core objective — </span>{{ challenge.objective }}
    </p>

    <ul class="mt-4 flex-1 space-y-2.5">
      <li v-for="item in challenge.criteria" :key="item" class="flex gap-2.5 text-sm leading-relaxed text-ink/70">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="mt-1 shrink-0 text-ink">
          <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>{{ item }}</span>
      </li>
    </ul>

    <RouterLink
      :to="challenge.route"
      class="mt-6 inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase text-ink transition-colors hover:text-pink"
    >
      {{ challenge.routeLabel }}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </RouterLink>
  </div>
</template>
