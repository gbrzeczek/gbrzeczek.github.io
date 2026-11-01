<script setup lang="ts">
import LinkSymbol from '@/components/LinkSymbol.vue'
import ProjectGallery, { type Screenshot } from '@/components/ProjectGallery.vue'

withDefaults(
  defineProps<{
    title: string
    status?: string
    links?: { label: string; href: string }[]
    tags?: string[]
    shots?: Screenshot[]
    shotsLabel?: string
    note?: string
  }>(),
  { links: () => [], tags: () => [], shots: () => [] }
)
</script>

<template>
  <article class="card">
    <ProjectGallery v-if="shots.length" :shots="shots" :label="shotsLabel" />
    <div class="body">
      <header>
        <h3>
          {{ title }}<span v-if="status" class="status">{{ status }}</span>
        </h3>
        <span v-if="links.length" class="card-links">
          <a
            v-for="link in links"
            :key="link.href"
            class="accent card-link"
            :href="link.href"
            target="_blank"
            rel="noopener"
            ><LinkSymbol />{{ link.label }}</a
          >
        </span>
      </header>
      <slot />
      <ul v-if="tags.length" class="tags">
        <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <p v-if="note" class="note">{{ note }}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.2s var(--ease);
}

.card:hover {
  border-color: var(--border-strong);
}

.body {
  padding: 1.5rem;
}

header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

h3 {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
}

.status {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.68rem;
  font-weight: 400;
  vertical-align: 0.15em;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: 999px;
}

.card-links {
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
}

.card-link {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.body :slotted(p) {
  font-size: 0.95rem;
}

.body :slotted(p:last-of-type) {
  margin-bottom: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}

.note {
  margin: 1rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-faint);
}
</style>
