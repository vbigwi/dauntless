<script setup lang="ts">
const year = 2026
</script>

<template>
  <footer class="relative mt-24 border-t-[3px] border-ink bg-ink px-4 pb-10 pt-14 text-cream sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col items-start justify-between gap-10 md:flex-row">
        <div class="max-w-sm">
          <div class="flex items-center gap-2.5">
            <span
              class="flex h-8 w-8 -rotate-3 items-center justify-center rounded-lg border-[3px] border-cream bg-yellow font-display text-sm font-black text-ink"
            >D</span>
            <span class="font-display text-lg font-extrabold text-cream">Dauntless</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-cream/60">
            An E-Lab think tank aligning cross-border regulations and strengthening trade
            corridors across Africa — one unified, multi-trillion-dollar market at a time.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-12 gap-y-8 text-sm sm:grid-cols-3">
          <div>
            <p class="font-display font-bold text-cream">Explore</p>
            <ul class="mt-3 space-y-2 text-cream/60">
              <li><RouterLink to="/team" class="hover:text-yellow">Meet the team</RouterLink></li>
              <li><RouterLink to="/culture" class="hover:text-yellow">Cultural insight</RouterLink></li>
              <li><RouterLink to="/community" class="hover:text-yellow">Community action</RouterLink></li>
            </ul>
          </div>
          <div>
            <p class="font-display font-bold text-cream">Project</p>
            <ul class="mt-3 space-y-2 text-cream/60">
              <li><RouterLink to="/project" class="hover:text-yellow">BODA-PAY</RouterLink></li>
              <li><RouterLink to="/journey" class="hover:text-yellow">Full journey</RouterLink></li>
            </ul>
          </div>
          <div>
            <p class="font-display font-bold text-cream">Program</p>
            <ul class="mt-3 space-y-2 text-cream/60">
              <li><a href="https://www.instagram.com/alupreneurship" target="_blank" rel="noopener" class="hover:text-yellow">@alupreneurship</a></li>
              <li><span class="text-cream/40">ALU E-Lab · Challenge 06</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 font-mono text-xs text-cream/40 sm:flex-row">
        <p>© {{ year }} Dauntless Think Tank. Built for the E-Lab Journey Portfolio.</p>
        <p>Designed &amp; built with Vue · TypeScript · Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>
