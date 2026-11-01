<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import sheetsolverHome from '@/assets/projects/sheetsolver/home.png'
import expensesHeroLight from '@/assets/projects/expense-insights/hero-light.png'
import expensesHeroDark from '@/assets/projects/expense-insights/hero-dark.png'
import expensesCategory from '@/assets/projects/expense-insights/category.png'
import expensesTransactions from '@/assets/projects/expense-insights/transactions.png'
import expensesMerchants from '@/assets/projects/expense-insights/merchants.png'
import expensesImport from '@/assets/projects/expense-insights/import.png'

const expensesShots = [
  {
    src: expensesHeroLight,
    srcDark: expensesHeroDark,
    alt: 'Monthly overview, category breakdown, review of guessed categories and recurring payments',
    fit: 'contain' as const
  },
  {
    src: expensesCategory,
    alt: 'Category drill-down: monthly total, six-month bars and top merchants',
    fit: 'contain' as const
  },
  {
    src: expensesTransactions,
    alt: 'Transaction list grouped by day, with search and filters',
    fit: 'contain' as const
  },
  {
    src: expensesMerchants,
    alt: 'Uncategorised merchants ranked by amount, with classification coverage',
    fit: 'contain' as const
  },
  {
    src: expensesImport,
    alt: 'CSV import with the history of previous imports',
    fit: 'contain' as const
  }
]
</script>

<template>
  <section>
    <h2 class="section-label">projects</h2>
    <div class="projects">
      <ProjectCard
        title="sheetsolver"
        :links="[
          { label: 'Live', href: 'https://sheetsolver.gbrzeczek.dev' },
          { label: 'GitHub', href: 'https://github.com/gbrzeczek/sheetsolver' }
        ]"
        :tags="['Rust', 'Svelte', 'Docker']"
        :shots="[{ src: sheetsolverHome, alt: 'Job setup: parts to make and panels you have' }]"
        shots-label="sheetsolver.gbrzeczek.dev"
      >
        <p>
          <span class="accent">Cutting plans for woodworkers</span> - enter the parts you need and
          the panels you have, and get a plan of guillotine cuts that wastes as little board as
          possible. Under the hood it's a <span class="accent">Rust</span> reimplementation of the
          2D guillotine solver from packingsolver, which gives exactly the same cutting plans as the
          original on every test instance, often faster.
        </p>
        <p>
          The solver is exposed through a web API with streamed job progress and a
          <span class="accent">Svelte</span> UI, shipped as a single
          <span class="accent">Docker</span> image and self-hosted on my server.
        </p>
      </ProjectCard>

      <ProjectCard
        title="expense-insights"
        status="in progress"
        :tags="['.NET', 'Angular', 'PostgreSQL', 'ONNX Runtime']"
        :shots="expensesShots"
      >
        <p>
          A self-hosted app for <span class="accent">making sense of my spending</span>. It imports
          bank CSV exports, classifies every transaction through a pipeline of rules, similarity
          search over past corrections and <span class="accent">local embeddings</span>, lets me fix
          a category in one tap, and turns it all into mobile-first summaries and insights.
        </p>
        <p>
          It's a modular monolith on <span class="accent">ASP.NET Core</span> with
          <span class="accent">PostgreSQL</span> (pg_trgm and pgvector) and an
          <span class="accent">Angular</span> PWA, running on my home server behind Tailscale.
        </p>
      </ProjectCard>

      <ProjectCard
        title="Personal website"
        :links="[{ label: 'GitHub', href: 'https://github.com/gbrzeczek/gbrzeczek.github.io' }]"
        :tags="['Vue', 'TypeScript', 'GitHub Pages']"
      >
        <p>
          This simple <span class="accent">personal website</span> was created partly as a way to
          get myself out there, and partly as a way to learn the basics of
          <span class="accent">Vue</span>. It's a single-page application with a few components,
          deployed on <span class="accent">Github Pages</span>.
        </p>
      </ProjectCard>

      <ProjectCard title="Video converters" :tags="['C#', 'FFmpeg', 'OpenCV', 'Docker Swarm']">
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
      </ProjectCard>

      <ProjectCard
        title="Voting machine"
        :links="[{ label: 'YouTube', href: 'https://youtu.be/BABlTRHFsPk' }]"
        :tags="['AVR', 'Embedded C', 'Python']"
      >
        <p>
          A university project - a prototype of a voting system based on
          <span class="accent">ATMega 328P</span> for the main station and
          <span class="accent">ATtiny 85</span> for remaining stations, with the ability to vote via
          the internet using a basic Python application. The biggest challenge was handling both the
          local and remote functionality using the not-very-huge memory of the
          <span class="accent">microcontroller</span>. The project was hardware-focused, so the web
          functionality was only thrown in as an extra, and could be improved upon heavily.
        </p>
      </ProjectCard>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
