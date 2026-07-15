<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import VideoEmbed from '../components/VideoEmbed.vue'

// TODO: replace with the team's actual Help-Lab reflection from Challenge 03.
const reflection = [
  {
    q: "What was your think tank's contribution to this cause?",
    a: 'Add a short reflection on the activity your team carried out and what you contributed to it.',
  },
  {
    q: 'What skills did you leverage, and what new skills were acquired?',
    a: 'Add the skills your team already had going in, and the new ones you picked up along the way.',
  },
  {
    q: 'What are the long-term benefits of your social act?',
    a: 'Add the lasting impact you expect this activity to have on the community and on your team.',
  },
]

const chips = ['bg-yellow', 'bg-blue', 'bg-pink']
</script>

<template>
  <div>
    <PageHero
      badge="Challenge 03 · 2,000 pts"
      eyebrow="Community action"
      title="Help-Lab:"
      accent="Community Engagement"
      subtitle="Direct, hands-on community engagement — and the real social impact it created."
    />

    <section class="bg-cream px-4 pb-16 pt-16 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <span class="brut-tag -rotate-1 mb-5 inline-flex bg-pink">Engagement Video</span>
        <VideoEmbed video-id="TCCFuQ-Ic60" title="Dauntless — Help-Lab Community Engagement (Challenge 03)" />
      </div>
    </section>

    <section class="bg-cream px-4 pb-24 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <span class="brut-tag rotate-1 mb-8 inline-flex bg-green">Our Reflection</span>

        <div class="space-y-5">
          <div v-for="(item, i) in reflection" :key="item.q" class="brut-card flex gap-5 p-6 sm:p-7">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[3px] border-ink font-display text-lg font-black text-ink"
              :class="chips[i % chips.length]"
            >{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <p class="font-display font-bold text-ink">{{ item.q }}</p>
              <p class="mt-2 text-sm leading-relaxed text-ink/70">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
