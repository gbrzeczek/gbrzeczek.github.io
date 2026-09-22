<script setup lang="ts">
import myImage from '@/assets/me.jpeg'

const links = [
  { to: '/', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/services', label: 'services' },
  { to: '/contact', label: 'contact' }
]
</script>

<template>
  <div class="navbar">
    <div class="intro">
      <img :src="myImage" class="me-img" alt="A photo of me, taken on an Icelandic beach" />
      <div>
        <h1>Grzegorz Brzęczek<span class="cursor" aria-hidden="true"></span></h1>
        <p class="role">Software Engineer · Poland</p>
      </div>
    </div>
    <nav aria-label="Main">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        exact-active-class="active"
      >
        <span class="nav-prefix" aria-hidden="true">~/</span>{{ link.label }}
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.me-img {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-strong);
  padding: 3px;
  background: var(--surface);
}

h1 {
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.cursor {
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  margin-left: 0.15em;
  vertical-align: -0.15em;
  background: var(--accent);
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.role {
  margin: 0.25rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 2.25rem;
  padding: 0.3rem;
  width: fit-content;
  max-width: 100%;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background: var(--surface);
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius);
  transition:
    color 0.2s var(--ease),
    background-color 0.2s var(--ease);
}

.nav-prefix {
  color: var(--text-faint);
  transition: color 0.2s var(--ease);
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  color: var(--text);
  background: var(--accent-soft);
}

.nav-link.active .nav-prefix {
  color: var(--accent);
}

@media (max-width: 480px) {
  nav {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
  }

  .nav-link {
    padding: 0.4rem 0.6rem;
  }

  .nav-prefix {
    display: none;
  }
}
</style>
