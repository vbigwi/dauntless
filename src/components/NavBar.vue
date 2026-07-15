<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/culture', label: 'Culture' },
  { to: '/community', label: 'Community' },
  { to: '/project', label: 'Project' },
  { to: '/journey', label: 'Journey' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-2.5" @click="close">
        <span
          class="flex h-9 w-9 -rotate-3 items-center justify-center rounded-lg border-[3px] border-ink bg-yellow font-display text-base font-black text-ink"
          style="box-shadow: var(--shadow-brut-sm)"
        >D</span>
        <span class="font-display text-lg font-extrabold tracking-tight text-ink">Dauntless</span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3.5 py-1.5 font-mono text-sm font-bold uppercase tracking-wide transition-colors"
          :class="route.path === link.to
            ? 'border-[3px] border-ink bg-blue text-ink'
            : 'border-[3px] border-transparent text-ink/60 hover:text-ink'"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <RouterLink to="/journey" class="brut-btn hidden !bg-pink md:inline-flex">
        Our Journey
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </RouterLink>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg border-[3px] border-ink bg-paper text-ink md:hidden"
        style="box-shadow: var(--shadow-brut-sm)"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <svg v-if="!open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        class="border-t-[3px] border-ink bg-paper p-3 md:hidden"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="mb-2 block rounded-lg border-[3px] px-4 py-3 font-mono text-base font-bold uppercase last:mb-0"
          :class="route.path === link.to ? 'border-ink bg-blue text-ink' : 'border-transparent text-ink/60'"
          @click="close"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </header>
</template>
