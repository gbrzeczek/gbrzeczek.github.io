<script setup lang="ts">
import LinkSymbol from '@/components/LinkSymbol.vue'
</script>

<template>
  <section>
    <h2 class="section-label">projects</h2>
    <div class="projects">
      <article class="card">
        <header>
          <h3>Personal website</h3>
          <a
            class="accent card-link"
            href="https://github.com/gbrzeczek/gbrzeczek.github.io"
            target="_blank"
            rel="noopener"
            ><LinkSymbol />GitHub</a
          >
        </header>
        <p>
          This simple <span class="accent">personal website</span> was created partly as a way to
          get myself out there, and partly as a way to learn the basics of
          <span class="accent">Vue</span>. It's a single-page application with a few components,
          deployed on <span class="accent">Github Pages</span>.
        </p>
        <ul class="tags">
          <li class="tag">Vue</li>
          <li class="tag">TypeScript</li>
          <li class="tag">GitHub Pages</li>
        </ul>
      </article>

      <article class="card">
        <header>
          <h3>Trip Planner <span class="status">in progress</span></h3>
          <a
            class="accent card-link"
            href="https://github.com/gbrzeczek/travel-planner"
            target="_blank"
            rel="noopener"
            ><LinkSymbol />GitHub</a
          >
        </header>
        <p>
          A project I'm currently working on - a web application for
          <span class="accent">planning trips</span>. It will allow the user to plan the spots to
          visit, routes and accommodation. The app is based on a
          <span class="accent">.NET</span> web API and an
          <span class="accent">Angular</span> frontend with Tailwind CSS.
        </p>
        <ul class="tags">
          <li class="tag">.NET</li>
          <li class="tag">Angular</li>
          <li class="tag">Tailwind CSS</li>
        </ul>
      </article>

      <article class="card">
        <header>
          <h3>Video converters</h3>
        </header>
        <p>
          A set of applications, converting the company's internal file format containing
          <span class="accent">binary data</span> into a video file. The apps also perform
          <span class="accent">video post-processing</span>, such as adding overlays and creating
          mosaic videos. One of the components also performs image inference using an internal AI
          API and draws the resulting bounding boxes on the video.
        </p>
        <p>
          The apps are written in <span class="accent">C#</span> and wrap around
          <span class="accent">FFmpeg</span> and <span class="accent">OpenCV</span>. The converters
          are deployed in a distributed manner using <span class="accent">Docker Swarm</span> - they
          started as a single Windows service and gradually evolved, as complexity increased.
        </p>
        <ul class="tags">
          <li class="tag">C#</li>
          <li class="tag">FFmpeg</li>
          <li class="tag">OpenCV</li>
          <li class="tag">Docker Swarm</li>
        </ul>
      </article>

      <article class="card">
        <header>
          <h3>Voting machine</h3>
          <a
            class="accent card-link"
            href="https://youtu.be/BABlTRHFsPk"
            target="_blank"
            rel="noopener"
            ><LinkSymbol />YouTube</a
          >
        </header>
        <p>
          A university project - a prototype of a voting system based on
          <span class="accent">ATMega 328P</span> for the main station and
          <span class="accent">ATtiny 85</span> for remaining stations, with the ability to vote via
          the internet using a basic Python application. The biggest challenge was handling both the
          local and remote functionality using the not-very-huge memory of the
          <span class="accent">microcontroller</span>. The project was hardware-focused, so the web
          functionality was only thrown in as an extra, and could be improved upon heavily.
        </p>
        <ul class="tags">
          <li class="tag">AVR</li>
          <li class="tag">Embedded C</li>
          <li class="tag">Python</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background: var(--surface);
  transition: border-color 0.2s var(--ease);
}

.card:hover {
  border-color: var(--border-strong);
}

.card header {
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

.card-link {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.card p {
  font-size: 0.95rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}
</style>
