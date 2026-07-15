<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import PhoneFrame from '../components/PhoneFrame.vue'
import BrowserFrame from '../components/BrowserFrame.vue'

type MobileTab = 'wallet' | 'send' | 'scan' | 'success'
type WebTab = 'overview' | 'transactions'
type ScanState = 'scanning' | 'found'

const mobileTab = ref<MobileTab>('wallet')
const webTab = ref<WebTab>('overview')
const scanState = ref<ScanState>('scanning')
const sendDigits = ref('0')
const successInfo = ref({ amount: '', sub: '', id: '' })

const mobileTabs: { id: 'wallet' | 'send' | 'scan'; label: string }[] = [
  { id: 'wallet', label: 'Wallet' },
  { id: 'send', label: 'Send' },
  { id: 'scan', label: 'Scan' },
]

const webTabs: { id: WebTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'transactions', label: 'Transactions' },
]

const comingSoon = ['Traders', 'Settlements', 'Corridor Map', 'Settings']

const activity = [
  { name: 'Port Sudan Trader', sub: 'Corridor payout', amount: '-35,000 RWF', chip: 'bg-pink' },
  { name: 'Kigali Wholesaler', sub: 'Incoming transfer', amount: '+120,000 RWF', chip: 'bg-green' },
  { name: 'Sudan Customs Fee', sub: 'Auto-settled', amount: '-4,200 RWF', chip: 'bg-blue' },
]

const alerts = [
  { text: 'Settlement batch #482 completed', time: '2m ago', chip: 'bg-green' },
  { text: 'New trader verified: K. Uwimana', time: '18m ago', chip: 'bg-blue' },
  { text: 'Border customs sync delayed', time: '41m ago', chip: 'bg-pink' },
]

const weeklyVolume = [40, 65, 50, 80, 62, 90, 74]

const transactions = [
  { id: 'BP-10234', trader: 'A. Suleiman', corridor: 'Kigali → Port Sudan', amount: '210,000 RWF', status: 'Settled', chip: 'bg-green' },
  { id: 'BP-10235', trader: 'K. Uwimana', corridor: 'Port Sudan → Kigali', amount: '84,500 RWF', status: 'Settled', chip: 'bg-green' },
  { id: 'BP-10236', trader: 'M. Abdelgader', corridor: 'Kigali → Port Sudan', amount: '512,000 RWF', status: 'Pending', chip: 'bg-yellow' },
  { id: 'BP-10237', trader: 'D. Gasana', corridor: 'Kigali → Port Sudan', amount: '19,750 RWF', status: 'Settled', chip: 'bg-green' },
  { id: 'BP-10238', trader: 'N. Eden', corridor: 'Port Sudan → Kigali', amount: '63,000 RWF', status: 'Flagged', chip: 'bg-pink' },
  { id: 'BP-10239', trader: 'V. Bigwi', corridor: 'Kigali → Port Sudan', amount: '145,000 RWF', status: 'Settled', chip: 'bg-green' },
  { id: 'BP-10240', trader: 'A. Mohamed', corridor: 'Port Sudan → Kigali', amount: '7,300 RWF', status: 'Settled', chip: 'bg-green' },
  { id: 'BP-10241', trader: 'D. Uwase', corridor: 'Kigali → Port Sudan', amount: '328,900 RWF', status: 'Pending', chip: 'bg-yellow' },
]

const amountNumber = computed(() => Number(sendDigits.value || '0'))
const formattedAmount = computed(() => amountNumber.value.toLocaleString('en-US'))
const usdcAmount = computed(() => (amountNumber.value * 0.0007).toFixed(2))

function appendDigit(d: string) {
  if (sendDigits.value === '0') sendDigits.value = ''
  if (sendDigits.value.length < 7) sendDigits.value += d
}
function backspaceDigit() {
  sendDigits.value = sendDigits.value.slice(0, -1)
}
function genTxnId() {
  return 'BP-' + Math.floor(10000 + Math.random() * 89999)
}

function selectMobileTab(id: 'wallet' | 'send' | 'scan') {
  if (id === 'scan') startScan()
  else mobileTab.value = id
}

function startScan() {
  mobileTab.value = 'scan'
  scanState.value = 'scanning'
  window.setTimeout(() => {
    if (mobileTab.value === 'scan') scanState.value = 'found'
  }, 1600)
}

function confirmSend() {
  if (!amountNumber.value) return
  successInfo.value = {
    amount: `${formattedAmount.value} RWF`,
    sub: 'to M. Abdelgader — Port Sudan',
    id: genTxnId(),
  }
  mobileTab.value = 'success'
}

function payScanned() {
  successInfo.value = {
    amount: '8,000 RWF',
    sub: 'to Boda Rider #482',
    id: genTxnId(),
  }
  mobileTab.value = 'success'
}

function resetToWallet() {
  mobileTab.value = 'wallet'
  sendDigits.value = '0'
  scanState.value = 'scanning'
}
</script>

<template>
  <div>
    <PageHero
      badge="Challenge 04 & 05 · Prototype"
      eyebrow="Live prototype"
      title="BODA-PAY,"
      accent="in your hands"
      subtitle="A working prototype of the app traders and agents actually use — on their phone, and on the web dashboard that keeps the corridor running."
    />

    <!-- Mobile app -->
    <section class="bg-cream px-4 py-20 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Mobile app"
          title="Send money like"
          accent="texting a friend"
          subtitle="Built for traders on the move — a trader in Kigali can pay a supplier in Port Sudan in three taps, no bank branch required. Tap around, it's live."
        />

        <div class="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <div>
            <div class="mb-5 flex justify-center gap-2 lg:justify-start">
              <button
                v-for="tab in mobileTabs"
                :key="tab.id"
                class="rounded-lg border-[3px] border-ink px-3.5 py-1.5 font-mono text-xs font-bold uppercase transition-colors"
                :class="mobileTab === tab.id || (tab.id === 'scan' && mobileTab === 'scan') ? 'bg-yellow text-ink' : 'bg-paper text-ink/50'"
                @click="selectMobileTab(tab.id)"
              >
                {{ tab.label }}
              </button>
            </div>

            <PhoneFrame :dark="mobileTab === 'scan' || mobileTab === 'success'">
              <!-- Wallet screen -->
              <div v-if="mobileTab === 'wallet'" class="flex h-full flex-col p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-mono text-[10px] uppercase tracking-wide text-ink/50">Good afternoon</p>
                    <p class="font-display text-sm font-bold text-ink">Aisha K.</p>
                  </div>
                  <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-yellow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                  </span>
                </div>

                <div class="mt-4 rounded-2xl border-[3px] border-ink bg-yellow p-4">
                  <p class="font-mono text-[10px] uppercase tracking-wide text-ink/60">Available balance</p>
                  <p class="mt-1 font-mono text-xl font-black text-ink">50,000 RWF</p>
                  <p class="font-mono text-[11px] text-ink/60">≈ 34.80 USDC</p>
                </div>

                <div class="mt-4 grid grid-cols-4 gap-2">
                  <button
                    v-for="action in ['Send', 'Request', 'Scan', 'Cash out']"
                    :key="action"
                    class="flex flex-col items-center gap-1"
                    @click="action === 'Send' ? (mobileTab = 'send') : action === 'Scan' ? startScan() : null"
                  >
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink bg-paper">
                      <svg v-if="action === 'Send'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      <svg v-else-if="action === 'Request'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M11 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      <svg v-else-if="action === 'Scan'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 8V5a1 1 0 0 1 1-1h3M4 16v3a1 1 0 0 0 1 1h3M20 8V5a1 1 0 0 0-1-1h-3M20 16v3a1 1 0 0 1-1 1h-3" stroke-linecap="round" /></svg>
                      <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" stroke-linecap="round" /></svg>
                    </span>
                    <span class="font-mono text-[8px] font-bold uppercase text-ink/60">{{ action }}</span>
                  </button>
                </div>

                <p class="mt-5 font-mono text-[10px] uppercase tracking-wide text-ink/50">Recent activity</p>
                <div class="mt-2 space-y-2 overflow-hidden">
                  <div v-for="row in activity" :key="row.name" class="flex items-center gap-2 rounded-xl border-2 border-ink/10 p-2">
                    <span class="h-6 w-6 shrink-0 rounded-full border-2 border-ink" :class="row.chip"></span>
                    <div class="min-w-0 flex-1">
                      <p class="truncate font-mono text-[10px] font-bold text-ink">{{ row.name }}</p>
                      <p class="truncate font-mono text-[9px] text-ink/50">{{ row.sub }}</p>
                    </div>
                    <span class="shrink-0 font-mono text-[10px] font-bold text-ink">{{ row.amount }}</span>
                  </div>
                </div>
              </div>

              <!-- Send screen -->
              <div v-else-if="mobileTab === 'send'" class="flex h-full flex-col p-4">
                <button class="mb-2 flex items-center gap-1 font-mono text-[10px] font-bold uppercase text-ink/50" @click="mobileTab = 'wallet'">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M11 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Wallet
                </button>
                <p class="font-display text-sm font-bold text-ink">Send Money</p>

                <span class="brut-tag mt-2 inline-flex w-fit bg-blue text-[10px]">Kigali → Port Sudan</span>

                <div class="mt-2 rounded-xl border-2 border-ink/15 p-2">
                  <p class="font-mono text-[9px] uppercase text-ink/50">To</p>
                  <p class="font-mono text-xs font-bold text-ink">M. Abdelgader — Port Sudan</p>
                </div>

                <div class="mt-2 rounded-2xl border-[3px] border-ink bg-yellow p-3 text-center">
                  <p class="font-mono text-xl font-black leading-none text-ink">{{ formattedAmount }}</p>
                  <p class="font-mono text-[9px] font-bold uppercase text-ink/60">RWF</p>
                </div>
                <p class="mt-1.5 text-center font-mono text-[9px] text-ink/50">≈ {{ usdcAmount }} USDC · fee 80% below bank transfer</p>

                <div class="mt-2 grid flex-1 grid-cols-3 gap-1.5">
                  <button
                    v-for="key in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0']"
                    :key="key"
                    class="rounded-lg border-2 border-ink bg-paper font-mono text-sm font-bold text-ink transition-transform active:scale-95"
                    @click="appendDigit(key)"
                  >
                    {{ key }}
                  </button>
                  <button class="flex items-center justify-center rounded-lg border-2 border-ink bg-paper text-ink transition-transform active:scale-95" @click="backspaceDigit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H8l-7 8 7 8h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" stroke-linejoin="round" /><path d="m14 9-4 6m0-6 4 6" stroke-linecap="round" /></svg>
                  </button>
                </div>

                <button
                  class="brut-btn mt-2 w-full justify-center !bg-ink !text-cream disabled:opacity-30"
                  :disabled="!amountNumber"
                  @click="confirmSend"
                >
                  Confirm &amp; Send
                </button>
              </div>

              <!-- Success screen -->
              <div v-else-if="mobileTab === 'success'" class="flex h-full flex-col items-center justify-center gap-3 bg-green p-6 text-center">
                <span class="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink bg-paper">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-ink"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </span>
                <p class="font-display text-base font-black text-ink">Payment Sent</p>
                <div>
                  <p class="font-mono text-lg font-black text-ink">{{ successInfo.amount }}</p>
                  <p class="font-mono text-[10px] text-ink/60">{{ successInfo.sub }}</p>
                </div>
                <p class="font-mono text-[9px] uppercase tracking-wide text-ink/50">TXN {{ successInfo.id }} · Settled in 4.2s</p>
                <button class="brut-btn !bg-ink !text-cream" @click="resetToWallet">Done</button>
              </div>

              <!-- Scan screen -->
              <div v-else class="relative flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
                <button class="absolute left-4 top-4 flex items-center gap-1 font-mono text-[10px] font-bold uppercase text-cream/60" @click="mobileTab = 'wallet'">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M11 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  Wallet
                </button>

                <template v-if="scanState === 'scanning'">
                  <div class="relative h-32 w-32 animate-pulse">
                    <span class="absolute left-0 top-0 h-6 w-6 border-l-4 border-t-4 border-yellow"></span>
                    <span class="absolute right-0 top-0 h-6 w-6 border-r-4 border-t-4 border-yellow"></span>
                    <span class="absolute bottom-0 left-0 h-6 w-6 border-b-4 border-l-4 border-yellow"></span>
                    <span class="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 border-yellow"></span>
                  </div>
                  <p class="font-mono text-[10px] uppercase tracking-wide text-cream/60">Scanning for a BODA-PAY code…</p>
                </template>

                <template v-else>
                  <div class="brut-card w-full bg-paper p-4 text-left">
                    <p class="font-mono text-[9px] uppercase tracking-wide text-ink/50">Payment request</p>
                    <p class="mt-1 font-display text-sm font-bold text-ink">Boda Rider #482</p>
                    <p class="mt-2 font-mono text-xl font-black text-ink">8,000 RWF</p>
                    <button class="brut-btn mt-3 w-full justify-center !bg-green" @click="payScanned">Pay</button>
                  </div>
                  <button class="font-mono text-[10px] font-bold uppercase text-cream/50" @click="mobileTab = 'wallet'">Cancel</button>
                </template>
              </div>
            </PhoneFrame>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div class="brut-card bg-yellow p-5">
              <p class="font-display font-bold text-ink">Instant wallet</p>
              <p class="mt-1 text-sm leading-relaxed text-ink/70">Local currency and stablecoin balances side by side, so traders always know their real spending power.</p>
            </div>
            <div class="brut-card bg-blue p-5">
              <p class="font-display font-bold text-ink">Corridor-aware sends</p>
              <p class="mt-1 text-sm leading-relaxed text-ink/70">Every transfer shows its corridor, live conversion, and fee upfront — no surprises at settlement.</p>
            </div>
            <div class="brut-card bg-pink p-5">
              <p class="font-display font-bold text-ink">Scan to pay</p>
              <p class="mt-1 text-sm leading-relaxed text-ink/70">Agents and border-post merchants get paid with a single scan — no POS hardware needed.</p>
            </div>
            <div class="brut-card bg-green p-5">
              <p class="font-display font-bold text-ink">Seconds, not days</p>
              <p class="mt-1 text-sm leading-relaxed text-ink/70">Settlement confirms in the app in real time, backed by the same rails as the web dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Web dashboard -->
    <section class="bg-ink px-4 py-20 text-cream sm:px-6">
      <div class="mx-auto max-w-6xl">
        <p class="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.18em]">
          <span class="brut-tag rotate-1 bg-green text-ink">Web dashboard</span>
        </p>
        <h2 class="mt-4 font-display text-3xl font-black leading-[1.35] tracking-tight text-cream sm:text-4xl md:text-5xl">
          The corridor,
          <span class="rounded-md bg-yellow px-1.5 py-0.5 text-ink" style="box-decoration-break: clone; -webkit-box-decoration-break: clone">watched live</span>
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
          Agents and operations staff get a real-time view of every transaction moving through Kigali–Port Sudan, so nothing settles unnoticed.
        </p>

        <div class="mt-10">
          <BrowserFrame url="app.bodapay.africa/dashboard">
            <!-- App header -->
            <div class="flex items-center gap-3 border-b-[3px] border-ink px-4 py-3 sm:px-5">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-yellow font-display text-xs font-black text-ink">B</span>
              <span class="hidden font-display text-sm font-bold text-ink sm:inline">BODA-PAY Ops</span>
              <div class="ml-2 hidden max-w-xs flex-1 rounded-md border-2 border-ink/15 px-3 py-1 font-mono text-xs text-ink/40 md:block">
                Search traders, transactions…
              </div>
              <span class="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-blue font-mono text-[10px] font-bold text-ink">OP</span>
            </div>

            <div class="flex">
              <!-- Sidebar -->
              <div class="hidden w-40 shrink-0 border-r-[3px] border-ink p-3 sm:block">
                <button
                  v-for="tab in webTabs"
                  :key="tab.id"
                  class="mb-1 flex w-full items-center rounded-lg px-3 py-2 font-mono text-xs font-bold uppercase transition-colors"
                  :class="webTab === tab.id ? 'border-2 border-ink bg-yellow text-ink' : 'border-2 border-transparent text-ink/50 hover:text-ink'"
                  @click="webTab = tab.id"
                >
                  {{ tab.label }}
                </button>
                <div v-for="soon in comingSoon" :key="soon" class="mb-1 flex items-center justify-between rounded-lg px-3 py-2 font-mono text-[10px] font-bold uppercase text-ink/25">
                  <span>{{ soon }}</span>
                  <span class="rounded border border-ink/20 px-1 text-[8px]">Soon</span>
                </div>
              </div>

              <!-- Main content -->
              <div class="min-w-0 flex-1">
                <!-- Overview tab -->
                <div v-if="webTab === 'overview'" class="p-5 sm:p-6">
                  <div class="grid gap-4 sm:grid-cols-4">
                    <div class="rounded-xl border-[3px] border-ink bg-yellow p-3">
                      <p class="font-mono text-[10px] uppercase text-ink/60">Weekly volume</p>
                      <p class="font-mono text-lg font-black text-ink">$284K</p>
                    </div>
                    <div class="rounded-xl border-[3px] border-ink bg-blue p-3">
                      <p class="font-mono text-[10px] uppercase text-ink/60">Active traders</p>
                      <p class="font-mono text-lg font-black text-ink">1,204</p>
                    </div>
                    <div class="rounded-xl border-[3px] border-ink bg-pink p-3">
                      <p class="font-mono text-[10px] uppercase text-ink/60">Avg. settlement</p>
                      <p class="font-mono text-lg font-black text-ink">4.2s</p>
                    </div>
                    <div class="rounded-xl border-[3px] border-ink bg-green p-3">
                      <p class="font-mono text-[10px] uppercase text-ink/60">Corridor uptime</p>
                      <p class="font-mono text-lg font-black text-ink">99.9%</p>
                    </div>
                  </div>

                  <div class="mt-5 rounded-xl border-[3px] border-ink p-4">
                    <p class="font-mono text-[10px] uppercase tracking-wide text-ink/50">Volume this week</p>
                    <div class="mt-3 flex h-28 items-end gap-2 sm:gap-3">
                      <div
                        v-for="(v, i) in weeklyVolume"
                        :key="i"
                        class="flex-1 rounded-t-md border-[3px] border-b-0 border-ink"
                        :class="i === weeklyVolume.length - 1 ? 'bg-pink' : 'bg-blue'"
                        :style="{ height: v + '%' }"
                      ></div>
                    </div>
                    <div class="mt-2 flex justify-between font-mono text-[9px] uppercase text-ink/40">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>

                  <div class="mt-5 grid gap-4 sm:grid-cols-2">
                    <div class="rounded-xl border-[3px] border-ink p-4">
                      <p class="font-mono text-[10px] uppercase tracking-wide text-ink/50">Recent alerts</p>
                      <div class="mt-3 space-y-2.5">
                        <div v-for="a in alerts" :key="a.text" class="flex items-center gap-2">
                          <span class="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-ink" :class="a.chip"></span>
                          <p class="min-w-0 flex-1 truncate font-mono text-xs text-ink">{{ a.text }}</p>
                          <span class="shrink-0 font-mono text-[10px] text-ink/40">{{ a.time }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="rounded-xl border-[3px] border-ink p-4">
                      <p class="font-mono text-[10px] uppercase tracking-wide text-ink/50">Corridor snapshot</p>
                      <div class="mt-4 flex items-center justify-between font-mono text-xs font-bold text-ink">
                        <span class="rounded-md border-2 border-ink bg-yellow px-2 py-1">Kigali</span>
                        <span class="mx-2 flex-1 border-t-2 border-dashed border-ink/30"></span>
                        <span class="rounded-md border-2 border-ink bg-blue px-2 py-1">Port Sudan</span>
                      </div>
                      <p class="mt-4 text-xs leading-relaxed text-ink/60">35% faster border delays targeted by 2035 · $50M in unlocked bilateral trade.</p>
                    </div>
                  </div>
                </div>

                <!-- Transactions tab -->
                <div v-else class="p-5 sm:p-6">
                  <div class="overflow-x-auto">
                    <table class="w-full min-w-[560px] border-collapse text-left">
                      <thead>
                        <tr class="border-b-[3px] border-ink font-mono text-[10px] uppercase tracking-wide text-ink/50">
                          <th class="pb-2 pr-4">ID</th>
                          <th class="pb-2 pr-4">Trader</th>
                          <th class="pb-2 pr-4">Corridor</th>
                          <th class="pb-2 pr-4">Amount</th>
                          <th class="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="t in transactions" :key="t.id" class="border-b-2 border-ink/10 font-mono text-xs text-ink">
                          <td class="py-2.5 pr-4 text-ink/60">{{ t.id }}</td>
                          <td class="py-2.5 pr-4 font-bold">{{ t.trader }}</td>
                          <td class="py-2.5 pr-4 text-ink/70">{{ t.corridor }}</td>
                          <td class="py-2.5 pr-4 font-bold">{{ t.amount }}</td>
                          <td class="py-2.5">
                            <span class="rounded-md border-2 border-ink px-2 py-0.5 text-[10px] font-bold uppercase" :class="t.chip">{{ t.status }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-4 flex items-center justify-between font-mono text-[10px] uppercase text-ink/40">
                    <span>Showing 8 of 214 transactions</span>
                    <div class="flex gap-1.5">
                      <span class="rounded-md border-2 border-ink/20 px-2 py-1">Prev</span>
                      <span class="rounded-md border-2 border-ink bg-yellow px-2 py-1 text-ink">Next</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="bg-cream px-4 py-20 sm:px-6">
      <div class="brut-card relative mx-auto max-w-4xl overflow-hidden bg-pink p-8 text-center sm:p-12">
        <p class="font-display text-2xl font-black text-ink sm:text-3xl">
          This is where BODA-PAY stands today.
        </p>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
          Phase 1 designed it, Phase 2 tested it with real traders — see how we got here on the Project page.
        </p>
        <RouterLink to="/project" class="brut-btn mt-6 inline-flex !bg-ink !text-cream">
          Back to Project Space
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
