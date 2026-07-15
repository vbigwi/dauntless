<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import ChallengeCard from '../components/ChallengeCard.vue'
import { challenges } from '../data/challenges'

const chips = ['bg-yellow', 'bg-blue', 'bg-pink', 'bg-green']
</script>

<template>
  <div>
    <PageHero
      eyebrow="The full journey"
      title="Six challenges,"
      accent="one think tank"
      subtitle="From our first elevator pitch to the website you're on right now — every E-Lab milestone, documented end to end."
    />

    <section class="bg-cream px-4 pb-24 pt-16 sm:px-6">
      <div class="mx-auto max-w-3xl">
        <div
          v-for="(challenge, i) in challenges"
          :key="challenge.number"
          class="flex gap-5 sm:gap-6"
        >
          <div class="flex flex-col items-center">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-ink font-mono text-sm font-black text-ink"
              :class="chips[i % chips.length]"
            >
              {{ challenge.number }}
            </span>
            <span v-if="i < challenges.length - 1" class="my-2 w-[3px] flex-1 bg-ink/15"></span>
          </div>
          <div class="flex-1 pb-10">
            <ChallengeCard :challenge="challenge" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
