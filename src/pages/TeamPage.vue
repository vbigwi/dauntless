<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import VideoEmbed from '../components/VideoEmbed.vue'
import MemberCard from '../components/MemberCard.vue'
import { team } from '../data/team'

// TODO: replace with the team's actual joint statement from Challenge 01.
const teamStatement =
  'We came into E-Lab as strangers from different corners of the continent and different ' +
  'disciplines — and we’re leaving as a think tank. Our expectation is simple: to turn a real ' +
  'trade problem into a working solution, to sharpen how we pitch, build, and defend an idea under ' +
  'pressure, and to prove that six people who show up for each other can move faster than any of us ' +
  'could alone. What we hope to gain from E-Lab is not just a prototype — it’s the discipline to ' +
  'ship, and the confidence to keep building after the program ends.'
</script>

<template>
  <div>
    <PageHero
      badge="Challenge 01 · 1,700 pts"
      eyebrow="Meet the team"
      title="The people behind"
      accent="Dauntless"
      subtitle="Who we are, where we're from, and the value each of us brings to the table."
    />

    <section class="bg-cream px-4 pb-16 pt-16 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <span class="brut-tag rotate-1 mb-5 inline-flex bg-pink">The Crew</span>
        <div class="brut-card overflow-hidden">
          <img src="/team/group.jpg" alt="The Dauntless think tank, together on campus" class="w-full" />
        </div>
      </div>
    </section>

    <section class="bg-cream px-4 pb-20 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <span class="brut-tag -rotate-1 mb-5 inline-flex bg-green">Elevator Pitch</span>
        <VideoEmbed video-id="VnPUO5P_3t0" title="Dauntless — Elevator Pitch (Challenge 01)" />
      </div>
    </section>

    <section class="bg-ink px-4 py-20 sm:px-6">
      <div class="brut-card relative mx-auto max-w-4xl overflow-hidden bg-yellow p-8 sm:p-10">
        <p class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Our Team Statement</p>
        <p class="relative mt-4 text-lg italic leading-relaxed text-ink sm:text-xl">
          “{{ teamStatement }}”
        </p>
      </div>
    </section>

    <section class="bg-cream px-4 pb-24 pt-20 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <span class="brut-tag rotate-1 mb-10 inline-flex bg-blue">The Think Tank — 6 Members</span>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MemberCard v-for="member in team" :key="member.name" :member="member" />
        </div>
      </div>
    </section>
  </div>
</template>
