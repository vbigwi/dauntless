<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import StatTile from '../components/StatTile.vue'
import VideoEmbed from '../components/VideoEmbed.vue'

const problemStats = [
  { value: '$6.23M', label: "Rwanda's exports to Sudan", source: 'UN COMTRADE, 2022' },
  { value: '3×', label: 'Non-tariff barriers restrict trade more than tariffs do', source: 'UNCTAD, 2024' },
  { value: '76 → 274', label: 'Days to resolve a border dispute, 2021–2024', source: 'EAC Secretariat, 2025' },
  { value: '$10B', label: 'Lost annually to trade restrictions across East Africa', source: 'Regional trade estimate' },
]

const goalStats = [
  { value: '80%', label: 'Cut in cross-border transfer fees', chip: 'bg-yellow' },
  { value: 'Seconds', label: 'Payment settlement time, down from days', chip: 'bg-blue' },
  { value: '35%', label: 'Target reduction in border delays by 2035', chip: 'bg-pink' },
  { value: '$50M', label: 'Unlocked bilateral trade, targeted by 2035', chip: 'bg-green' },
]

const solutionPoints = [
  'Eliminates middlemen from cross-border payment flows.',
  'Cuts transfer fees by up to 80% using decentralized financial infrastructure.',
  'Settles payments in seconds — as simple as sending money to a neighbor.',
]
</script>

<template>
  <div>
    <PageHero
      badge="Challenge 04 & 05 · Project Space"
      eyebrow="Project space"
      title="Introducing"
      accent="BODA-PAY"
      subtitle="A decentralized digital payment platform built to make cross-border trade along the Kigali–Port Sudan corridor as simple as sending money to a neighbor."
    />

    <section class="bg-ink px-4 py-20 sm:px-6">
      <div class="brut-card relative mx-auto max-w-4xl overflow-hidden bg-yellow p-8 text-center sm:p-12">
        <p class="relative font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Our Mission</p>
        <p class="relative mx-auto mt-5 max-w-2xl font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
          “Our mission is to align cross-border regulations and strengthen trade corridors across
          Africa, removing the barriers that prevent the continent from realizing its potential as a
          unified, multi-trillion-dollar market.”
        </p>
      </div>
    </section>

    <section class="bg-cream px-4 py-20 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Problem statement"
          title="A corridor wasting its"
          accent="potential"
        />
        <div class="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div class="space-y-5 text-base leading-relaxed text-ink/70">
            <p>
              Trade between Rwanda and Sudan is inefficient, costly, and holding both countries back.
              Manufacturers, traders, truck drivers, and small business owners all pay the price
              because the systems meant to facilitate trade are actively working against them.
            </p>
            <p>
              Conflicting regulations and the absence of shared digital customs infrastructure are
              at the heart of this failure — and the numbers make the cost impossible to ignore.
            </p>
            <p>
              By 2035, our think tank will deploy a unified digital customs system and harmonize
              trade regulations between Kigali and Port Sudan, delivering a 35% reduction in border
              delays and $50 million in unlocked bilateral trade.
            </p>
          </div>
          <div class="brut-card grid grid-cols-2 gap-6 bg-paper p-6 sm:gap-8 sm:p-8">
            <StatTile v-for="stat in problemStats" :key="stat.label" v-bind="stat" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-pink px-4 py-20 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Our solution" title="Decentralized finance," accent="human-first design" />

        <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div class="brut-card overflow-hidden">
            <div class="border-b-[3px] border-ink bg-yellow px-7 py-6">
              <p class="font-display text-2xl font-black text-ink">BODA-PAY</p>
              <p class="text-sm font-bold text-ink/70">A Decentralized Digital Payment Platform</p>
            </div>
            <div class="bg-paper p-7">
              <p class="text-sm leading-relaxed text-ink/70 sm:text-base">
                BODA-PAY is a digital platform that enables instant, low-cost cross-border
                transactions for traders along the Kigali–Port Sudan corridor. Using decentralized
                financial infrastructure, it eliminates middlemen, cuts transfer fees, and settles
                payments in seconds.
              </p>
              <ul class="mt-5 space-y-3">
                <li v-for="point in solutionPoints" :key="point" class="flex gap-2.5 text-sm text-ink/70">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="mt-1 shrink-0 text-ink">
                    <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <div v-for="stat in goalStats" :key="stat.label" class="brut-card p-6" :class="stat.chip">
              <StatTile :value="stat.value" :label="stat.label" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cream px-4 py-24 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Prototype &amp; development"
          title="From blueprint to"
          accent="live prototype"
          subtitle="Challenges 04 and 05 trace BODA-PAY from its first draft workflow to a tested, refined build."
        />

        <div class="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <div class="mb-4 flex items-center gap-2">
              <span class="rounded-lg border-[3px] border-ink bg-blue px-2.5 py-0.5 font-mono text-xs font-bold text-ink">Phase 1</span>
              <p class="text-sm font-bold text-ink">Design &amp; Prototyping</p>
            </div>
            <VideoEmbed video-id="48Y8I_JjC7I" title="BODA-PAY — Phase 1: Design & Prototyping (Challenge 04)" />
            <p class="mt-4 text-sm leading-relaxed text-ink/60">
              Turning the brainstorm into a real blueprint: researching our target traders, mapping
              operational goals, and building BODA-PAY's first draft model and workflow.
            </p>
          </div>
          <div>
            <div class="mb-4 flex items-center gap-2">
              <span class="rounded-lg border-[3px] border-ink bg-green px-2.5 py-0.5 font-mono text-xs font-bold text-ink">Phase 2</span>
              <p class="text-sm font-bold text-ink">Deployment &amp; Refinement</p>
            </div>
            <VideoEmbed video-id="OsCVgQxxCtE" title="BODA-PAY — Phase 2: Deployment & Refinement (Challenge 05)" />
            <p class="mt-4 text-sm leading-relaxed text-ink/60">
              Putting the prototype in front of real users: testing, collecting feedback, and
              iterating on BODA-PAY ahead of this final presentation.
            </p>
          </div>
        </div>

        <RouterLink
          to="/prototype"
          class="brut-card group mt-10 flex flex-col items-start gap-5 overflow-hidden bg-blue p-6 transition-transform duration-150 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <span class="brut-tag -rotate-1 inline-flex bg-yellow">It's built</span>
            <p class="mt-3 font-display text-xl font-black text-ink sm:text-2xl">
              BODA-PAY has a working prototype — mobile app and web dashboard.
            </p>
            <p class="mt-2 max-w-lg text-sm leading-relaxed text-ink/70">
              Tap through the wallet, send a payment, and watch the corridor dashboard update live.
            </p>
          </div>
          <span class="brut-btn shrink-0 !bg-ink !text-cream">
            View the prototype
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
