<script setup lang="ts">
defineProps({
  logoPath: String,
  logoAlt: String,
  name: String
})
</script>

<template>
  <div class="service-tile">
    <img class="service-logo" :src="logoPath" :alt="logoAlt" />
    <div class="service-meta">
      <span class="service-name">{{ name }}</span>
      <span class="service-status">soon</span>
    </div>
  </div>
</template>

<style scoped>
.service-tile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  aspect-ratio: 1;
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background: var(--surface);
  transition: border-color 0.2s var(--ease);
}

.service-logo {
  width: 56px;
  height: 56px;
  opacity: 0.55;
  transition: opacity 0.2s var(--ease);
}

@media (prefers-color-scheme: dark) {
  .service-logo {
    filter: brightness(0) invert(1);
  }
}

@media (prefers-color-scheme: light) {
  .service-logo {
    filter: brightness(0);
  }
}

.service-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.service-status {
  font-size: 0.7rem;
  color: var(--text-faint);
}

.service-status::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 0.4rem;
  border-radius: 50%;
  background: var(--text-faint);
  vertical-align: 0.1em;
}

.service-tile:hover {
  border-color: var(--border-strong);
}

.service-tile:hover .service-logo {
  opacity: 1;
}
</style>
