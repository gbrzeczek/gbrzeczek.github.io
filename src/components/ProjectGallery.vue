<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

export interface Screenshot {
  src: string
  alt: string
  // Variant shown when the viewer prefers a dark colour scheme
  srcDark?: string
  // 'contain' letterboxes the shot instead of cropping it, e.g. for phone screens
  fit?: 'cover' | 'contain'
}

const props = defineProps<{
  shots: Screenshot[]
  // Shown in the fake address bar, e.g. "sheetsolver.gbrzeczek.dev"
  label?: string
}>()

const current = ref(0)
const dialog = ref<HTMLDialogElement>()

function open(index: number) {
  current.value = index
  dialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
}

function close() {
  dialog.value?.close()
}

function onClose() {
  document.documentElement.style.overflow = ''
}

function step(by: number) {
  const n = props.shots.length
  current.value = (current.value + by + n) % n
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') step(1)
  else if (event.key === 'ArrowLeft') step(-1)
}

// Clicks on the dialog itself (not its content) land on the backdrop
function onDialogClick(event: MouseEvent) {
  if (event.target === dialog.value) close()
}

onBeforeUnmount(onClose)
</script>

<template>
  <div class="stage">
    <button
      class="window"
      type="button"
      :aria-label="`Enlarge screenshot: ${shots[current].alt}`"
      @click="open(current)"
    >
      <span class="chrome" aria-hidden="true">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span v-if="label" class="address">{{ label }}</span>
      </span>
      <picture>
        <source
          v-if="shots[current].srcDark"
          :srcset="shots[current].srcDark"
          media="(prefers-color-scheme: dark)"
        />
        <img
          class="shot"
          :class="{ contain: shots[current].fit === 'contain' }"
          :src="shots[current].src"
          :alt="shots[current].alt"
          loading="lazy"
        />
      </picture>
      <span class="zoom-hint" aria-hidden="true">click to enlarge</span>
    </button>

    <div v-if="shots.length > 1" class="thumbs">
      <button
        v-for="(shot, i) in shots"
        :key="shot.src"
        class="thumb"
        :class="{ active: i === current }"
        type="button"
        :aria-label="`Show screenshot ${i + 1}: ${shot.alt}`"
        :aria-pressed="i === current"
        @click="current = i"
      >
        <picture>
          <source v-if="shot.srcDark" :srcset="shot.srcDark" media="(prefers-color-scheme: dark)" />
          <img :src="shot.src" alt="" loading="lazy" />
        </picture>
      </button>
    </div>
  </div>

  <dialog ref="dialog" class="lightbox" @click="onDialogClick" @close="onClose" @keydown="onKey">
    <figure>
      <picture>
        <source
          v-if="shots[current].srcDark"
          :srcset="shots[current].srcDark"
          media="(prefers-color-scheme: dark)"
        />
        <img :src="shots[current].src" :alt="shots[current].alt" />
      </picture>
      <figcaption>
        <span>{{ shots[current].alt }}</span>
        <span class="lightbox-nav">
          <template v-if="shots.length > 1">
            <button type="button" aria-label="Previous screenshot" @click="step(-1)">←</button>
            <span class="counter">{{ current + 1 }} / {{ shots.length }}</span>
            <button type="button" aria-label="Next screenshot" @click="step(1)">→</button>
          </template>
          <button type="button" aria-label="Close" @click="close">esc ✕</button>
        </span>
      </figcaption>
    </figure>
  </dialog>
</template>

<style scoped>
.stage {
  padding: 1.5rem 1.5rem 0;
  border-bottom: 1px solid var(--border);
  background-color: var(--bg);
  background-image: radial-gradient(ellipse at 50% 120%, var(--accent-soft), transparent 70%),
    radial-gradient(var(--grid-dot) 1px, transparent 1px);
  background-size:
    100% 100%,
    16px 16px;
  overflow: hidden;
}

.window {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  font: inherit;
  text-align: left;
  cursor: zoom-in;
  border: 1px solid var(--border-strong);
  border-bottom: none;
  border-radius: var(--radius) var(--radius) 0 0;
  background: var(--surface);
  overflow: hidden;
  box-shadow: 0 -8px 40px -12px rgba(0, 0, 0, 0.35);
  transform: translateY(6px);
  transition: transform 0.35s var(--ease);
}

.window:hover,
.window:focus-visible {
  transform: translateY(0);
}

.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-strong);
}

.address {
  flex: 1;
  margin: 0 2.5rem 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  text-align: center;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shot {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
}

.shot.contain {
  padding: 0.75rem;
  object-fit: contain;
  object-position: center;
  background: var(--bg);
}

.zoom-hint {
  position: absolute;
  right: 0.75rem;
  bottom: 1.25rem;
  padding: 0.3rem 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  opacity: 0;
  transform: translateY(4px);
  transition:
    opacity 0.2s var(--ease),
    transform 0.2s var(--ease);
}

.window:hover .zoom-hint,
.window:focus-visible .zoom-hint {
  opacity: 1;
  transform: translateY(0);
}

.thumbs {
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem 0;
  overflow-x: auto;
}

.thumb {
  flex: 0 0 auto;
  width: 64px;
  padding: 0;
  cursor: pointer;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  overflow: hidden;
  opacity: 0.55;
  transition:
    opacity 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.thumb img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
}

.thumb:hover,
.thumb.active {
  opacity: 1;
}

.thumb.active {
  border-color: var(--accent);
}

/* Lightbox */
.lightbox {
  width: fit-content;
  min-width: min(560px, 100vw - 2rem);
  max-width: min(1200px, 100vw - 2rem);
  max-height: calc(100vh - 2rem);
  padding: 0;
  border: 1px solid var(--border-strong);
  border-radius: calc(var(--radius) + 4px);
  background: var(--surface);
  color: var(--text);
  overflow: hidden;
}

.lightbox:focus-visible {
  outline: none;
}

.lightbox[open] {
  animation: pop 0.25s var(--ease);
}

.lightbox::backdrop {
  background: rgba(5, 6, 9, 0.8);
  backdrop-filter: blur(6px);
}

.lightbox figure {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2rem);
  margin: 0;
}

.lightbox picture {
  display: flex;
  justify-content: center;
  background: var(--bg);
}

.lightbox img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 6rem);
}

.lightbox figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}

.lightbox-nav {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
}

.lightbox-nav button {
  padding: 0.3rem 0.6rem;
  font: inherit;
  color: var(--text);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 999px;
  transition: border-color 0.2s var(--ease);
}

.lightbox-nav button:hover {
  border-color: var(--accent);
}

.counter {
  color: var(--text-faint);
}

@keyframes pop {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
}
</style>
