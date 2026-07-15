<template>
  <div class="relative mx-auto w-full max-w-md select-none" aria-hidden="true">
    <svg viewBox="0 0 400 400" class="w-full h-auto overflow-visible">
      <path
        id="corridor-route"
        d="M64 322 C 120 250, 110 170, 190 130 S 300 90, 336 70"
        fill="none"
        stroke="var(--color-ink)"
        stroke-width="3"
        stroke-dasharray="2 10"
        stroke-linecap="round"
      />

      <circle r="6" fill="var(--color-pink)" stroke="var(--color-ink)" stroke-width="2.5">
        <animateMotion dur="4.5s" repeatCount="indefinite">
          <mpath href="#corridor-route" />
        </animateMotion>
      </circle>

      <g>
        <circle cx="64" cy="322" r="15" fill="var(--color-yellow)" stroke="var(--color-ink)" stroke-width="3" />
        <circle cx="64" cy="322" r="4" fill="var(--color-ink)" />
      </g>
      <g>
        <circle cx="336" cy="70" r="15" fill="var(--color-blue)" stroke="var(--color-ink)" stroke-width="3" />
        <circle cx="336" cy="70" r="4" fill="var(--color-ink)" />
      </g>
    </svg>

    <div class="absolute text-right" style="right: 62%; bottom: 10%">
      <p class="font-display text-sm font-bold text-ink sm:text-base">Kigali</p>
      <p class="font-mono text-[11px] uppercase tracking-wide text-ink/50">Rwanda</p>
    </div>
    <div class="absolute" style="left: 62%; top: 4%">
      <p class="font-display text-sm font-bold text-ink sm:text-base">Port Sudan</p>
      <p class="font-mono text-[11px] uppercase tracking-wide text-ink/50">Sudan</p>
    </div>

    <div class="brut-card absolute left-[4%] top-[38%] max-w-[10.5rem] -rotate-2 bg-green p-3 sm:p-3.5">
      <p class="font-mono text-lg font-black text-ink">$10B</p>
      <p class="mt-0.5 text-xs leading-snug text-ink/70">lost yearly to trade restrictions across East Africa</p>
    </div>

    <div class="brut-card absolute bottom-[4%] right-0 max-w-[10.5rem] rotate-2 bg-yellow p-3 sm:p-3.5">
      <p class="font-display text-lg font-black text-ink">BODA-PAY</p>
      <p class="mt-0.5 text-xs leading-snug text-ink/70">our decentralized fix for this corridor</p>
    </div>
  </div>
</template>
