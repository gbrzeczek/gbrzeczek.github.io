<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
import SocialLinks from './components/SocialLinks.vue'
</script>

<template>
  <header><MainNavbar /></header>
  <main>
    <router-view v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </main>
  <footer>
    <SocialLinks />
    <span class="footer-note">© {{ new Date().getFullYear() }} · built with Vue</span>
  </footer>
</template>

<style scoped>
main {
  padding: 3rem 0 4rem;
  min-height: 40vh;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.footer-note {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-faint);
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s var(--ease),
    transform 0.2s var(--ease);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
}
</style>
