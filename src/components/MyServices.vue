<script setup lang="ts">
import ServiceTile from './ServiceTile.vue'
import nextcloudLogo from '@/assets/nextcloud-logo.svg'
import immichLogo from '@/assets/immich-logo.svg'
</script>

<template>
  <section>
    <h2 class="section-label">services</h2>
    <p>Self-hosted services, links for my and my friends' convenience coming soon</p>
    <div class="service-wrapper">
      <ServiceTile :logoPath="nextcloudLogo" logoAlt="Nextcloud logo" name="Nextcloud" />
      <ServiceTile :logoPath="immichLogo" logoAlt="Immich logo" name="Immich" />
    </div>
  </section>
</template>

<style scoped>
.service-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
</style>
