<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import VideoEmbed from '../components/VideoEmbed.vue'
import SectionHeading from '../components/SectionHeading.vue'

// TODO: swap in the team's actual Discover Africa myth/fact pairs once the story is finalized.
const mythFacts = [
  { myth: 'Add a common misconception about the community', fact: 'Add the real, fact-checked reframe' },
  { myth: 'Add a common misconception about the community', fact: 'Add the real, fact-checked reframe' },
  { myth: 'Add a common misconception about the community', fact: 'Add the real, fact-checked reframe' },
]
</script>

<template>
  <div>
    <PageHero
      badge="Challenge 02 · 1,800 pts"
      eyebrow="Cultural insight"
      title="Discover"
      accent="Africa"
      subtitle="Radical storytelling that highlights an underrated community, dispels misconceptions, and names the real challenges it faces."
    />

    <section class="bg-cream px-4 pb-16 pt-16 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <span class="brut-tag -rotate-1 mb-5 inline-flex bg-blue">Our Story</span>
        <VideoEmbed
          title="Dauntless — Discover Africa (Challenge 02)"
          pending-note="Our Discover Africa submission link is pending an update from the E-Lab team — this space will hold the final story once it's live."
        />
      </div>
    </section>

    <section class="bg-cream px-4 pb-20 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <div class="brut-card relative overflow-hidden bg-green p-8 sm:p-10">
          <p class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Why this matters to Dauntless</p>
          <p class="relative mt-4 text-base leading-relaxed text-ink sm:text-lg">
            The same informal cross-border traders and boda riders who move goods along the
            Kigali–Port Sudan corridor are central to the community we're spotlighting for this
            challenge. Their routines, ingenuity, and resilience shaped how we think about
            <RouterLink to="/project" class="font-bold underline decoration-2 hover:text-pink">BODA-PAY</RouterLink>
            — and they're the reason "Discover Africa" and "Project Space" are two chapters of the
            same story for us.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue px-4 py-24 sm:px-6">
      <div class="mx-auto max-w-5xl">
        <SectionHeading
          center
          eyebrow="Myth vs. Fact"
          title="Dispelling the"
          accent="misconceptions"
          subtitle="A quick side-by-side of what people assume versus what we found."
        />

        <div class="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          <div v-for="(pair, i) in mythFacts" :key="i" class="brut-card flex flex-col gap-4 bg-paper p-6">
            <div>
              <p class="font-mono text-xs font-bold uppercase tracking-widest text-ink/50">Myth</p>
              <p class="mt-1.5 text-sm leading-relaxed text-ink/70">{{ pair.myth }}</p>
            </div>
            <div class="border-t-[3px] border-ink/10 pt-4">
              <p class="font-mono text-xs font-bold uppercase tracking-widest text-pink">Fact</p>
              <p class="mt-1.5 text-sm leading-relaxed text-ink">{{ pair.fact }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
