<script setup lang="ts">
import TradeRouteVisual from '../components/TradeRouteVisual.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { team } from '../data/team'
import { challenges } from '../data/challenges'

const directory = [
  {
    to: '/team',
    label: 'Meet The Team',
    desc: 'Six minds, one think tank. Our elevator pitch, our statement, our people.',
    icon: 'users',
    color: 'bg-yellow',
  },
  {
    to: '/culture',
    label: 'Cultural Insight',
    desc: 'Radical storytelling that dispels myths about African communities.',
    icon: 'globe',
    color: 'bg-blue',
  },
  {
    to: '/community',
    label: 'Community Action',
    desc: 'Our Help-Lab engagement and what it taught us about impact.',
    icon: 'hands',
    color: 'bg-pink',
  },
  {
    to: '/project',
    label: 'Project Space',
    desc: 'BODA-PAY — our decentralized answer to a $10B trade problem.',
    icon: 'rocket',
    color: 'bg-green',
  },
  {
    to: '/prototype',
    label: 'Prototype',
    desc: 'The BODA-PAY app and dashboard — tap through it yourself.',
    icon: 'phone',
    color: 'bg-pink',
  },
  {
    to: '/journey',
    label: 'Full Journey',
    desc: 'All six E-Lab challenges, documented end to end.',
    icon: 'map',
    color: 'bg-yellow',
  },
]
</script>

<template>
  <div>
    <!-- Hero band -->
    <section class="relative overflow-hidden bg-yellow px-4 pb-0 pt-14 sm:px-6 sm:pt-20">
      <div class="mx-auto max-w-6xl">
        <div class="grid items-center gap-x-12 gap-y-14 pb-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 class="font-display text-6xl font-black leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
              We're
              <span
                class="rounded-md bg-paper px-1.5 py-0.5"
                style="box-decoration-break: clone; -webkit-box-decoration-break: clone"
              >Dauntless</span>
            </h1>

            <p class="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
              Our mission is to align cross-border regulations and strengthen trade corridors
              across Africa — removing the barriers that prevent the continent from realizing
              its potential as a unified, multi-trillion-dollar market.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <RouterLink to="/project" class="brut-btn !bg-ink !text-cream">
                Explore BODA-PAY
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <RouterLink to="/journey" class="brut-btn !bg-paper">
                See our journey
              </RouterLink>
            </div>
          </div>

          <div class="relative">
            <TradeRouteVisual />
          </div>
        </div>
      </div>

      <div class="overflow-hidden border-y-[3px] border-ink bg-ink py-3">
        <div class="flex w-max animate-marquee gap-10">
          <span
            v-for="(c, i) in [...challenges, ...challenges]"
            :key="i"
            class="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-sm font-bold text-cream"
          >
            <span class="text-yellow">{{ c.number }}</span>
            {{ c.title }}
            <span class="text-cream/30">/</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Feature band -->
    <section class="bg-ink px-4 py-16 text-cream sm:px-6">
      <div class="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div class="flex items-start gap-3">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-cream bg-yellow text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" stroke-linejoin="round" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke-linejoin="round" />
            </svg>
          </div>
          <div>
            <p class="font-display font-bold text-cream">Cross-Border by Design</p>
            <p class="mt-1 text-sm leading-relaxed text-cream/60">Every idea we build is tested against the realities of trading across African borders.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-cream bg-blue text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div>
            <p class="font-display font-bold text-cream">Decentralized First</p>
            <p class="mt-1 text-sm leading-relaxed text-cream/60">We design financial rails that cut out middlemen and settle in seconds, not days.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-cream bg-pink text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <p class="font-display font-bold text-cream">Community-Driven</p>
            <p class="mt-1 text-sm leading-relaxed text-cream/60">From Help-Lab to user testing, every phase is grounded in real community feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Directory band -->
    <section class="bg-cream px-4 py-20 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <SectionHeading
          center
          eyebrow="Directory"
          title="Explore the"
          accent="E-Lab journey"
          subtitle="Every milestone of our think tank's journey, documented — from first pitch to final prototype."
        />

        <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="item in directory"
            :key="item.to"
            :to="item.to"
            class="brut-card group flex flex-col gap-3 p-6 transition-transform duration-150 hover:-translate-y-1"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-ink text-ink" :class="item.color">
              <svg v-if="item.icon === 'users'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <svg v-else-if="item.icon === 'globe'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></svg>
              <svg v-else-if="item.icon === 'hands'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 12h4.5a1.5 1.5 0 0 0 0-3H12l-3-2-5 3v5l4 3 4-1" stroke-linejoin="round" /></svg>
              <svg v-else-if="item.icon === 'rocket'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /></svg>
              <svg v-else-if="item.icon === 'phone'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" stroke-linecap="round" /></svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 20l-5-2V6l5-2 6 2 5-2v14l-5 2-6-2Z" stroke-linejoin="round" /><path d="M9 4v14M15 6v14" /></svg>
            </div>
            <p class="font-display font-bold text-ink">{{ item.label }}</p>
            <p class="text-sm leading-relaxed text-ink/70">{{ item.desc }}</p>
            <span class="mt-auto inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase text-ink opacity-0 transition-opacity group-hover:opacity-100">
              View
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Team teaser band -->
    <section class="bg-blue px-4 py-20 sm:px-6">
      <div class="brut-card relative mx-auto max-w-6xl overflow-hidden bg-paper p-8 sm:p-12">
        <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">Meet the think tank</p>
            <h3 class="mt-3 font-display text-2xl font-black text-ink sm:text-3xl">
              Six people. One border-breaking idea.
            </h3>
            <p class="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
              {{ team.map((m) => m.name.split(' ')[0]).join(', ') }} — the team behind
              Dauntless and BODA-PAY.
            </p>
            <RouterLink
              to="/team"
              class="mt-6 inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase text-ink hover:text-pink"
            >
              Meet everyone
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </RouterLink>
          </div>
          <div class="flex flex-wrap justify-center gap-4 lg:justify-end">
            <img
              v-for="m in team.filter((m) => m.photo)"
              :key="m.name"
              :src="m.photo"
              :alt="m.name"
              :title="m.name"
              class="h-16 w-16 rounded-full border-[3px] border-ink object-cover sm:h-20 sm:w-20"
            />
            <div
              v-for="m in team.filter((m) => !m.photo)"
              :key="m.name"
              class="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-ink font-display text-sm font-black text-ink sm:h-20 sm:w-20"
              :style="{ background: m.color }"
              :title="m.name"
            >
              {{ m.initials }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
