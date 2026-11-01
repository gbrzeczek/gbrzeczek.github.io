import type { Screenshot } from '@/components/ProjectGallery.vue'

// Screenshots are committed at full resolution; vite-imagetools turns them into WebP at build time
// - one copy sized for the card and lightbox, and a small one for the gallery thumbnails
const full = import.meta.glob<string>('./**/*.{png,jpg}', {
  query: '?w=1400&format=webp&withoutEnlargement',
  import: 'default',
  eager: true
})

const thumbs = import.meta.glob<string>('./**/*.{png,jpg}', {
  query: '?w=160&format=webp&withoutEnlargement',
  import: 'default',
  eager: true
})

function variants(path: string) {
  const key = `./${path}`
  if (!(key in full)) throw new Error(`Unknown project screenshot: ${path}`)
  return { src: full[key], thumb: thumbs[key] }
}

// Paths are relative to this folder, e.g. 'sheetsolver/home.png'
export function shot(
  path: string,
  alt: string,
  options: { dark?: string; fit?: Screenshot['fit'] } = {}
): Screenshot {
  const light = variants(path)
  const dark = options.dark ? variants(options.dark) : undefined

  return {
    src: light.src,
    thumb: light.thumb,
    srcDark: dark?.src,
    thumbDark: dark?.thumb,
    alt,
    fit: options.fit
  }
}
