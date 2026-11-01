<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { shot } from '@/assets/projects'

const contain = { fit: 'contain' as const }

const sheetsolverShots = [
  shot('sheetsolver/home.png', 'Job setup: parts to make and panels you have')
]

const expensesShots = [
  shot(
    'expense-insights/hero-light.png',
    'Monthly overview, category breakdown, review of guessed categories and recurring payments',
    { ...contain, dark: 'expense-insights/hero-dark.png' }
  ),
  shot(
    'expense-insights/category.png',
    'Category drill-down: monthly total, six-month bars and top merchants',
    contain
  ),
  shot(
    'expense-insights/transactions.png',
    'Transaction list grouped by day, with search and filters',
    contain
  ),
  shot(
    'expense-insights/merchants.png',
    'Uncategorised merchants ranked by amount, with classification coverage',
    contain
  ),
  shot('expense-insights/import.png', 'CSV import with the history of previous imports', contain)
]

const toeflShots = [
  shot(
    'toefl-grammar-learner/progress.png',
    'Study history calendar and mastery per grammar topic, weakest first',
    contain
  ),
  shot(
    'toefl-grammar-learner/question.png',
    'Error-identification question answered wrongly, with the explanation and correction',
    contain
  ),
  shot(
    'toefl-grammar-learner/timed.png',
    'Timed practice question with the per-question countdown',
    contain
  ),
  shot(
    'toefl-grammar-learner/mistakes.png',
    'Review of the mistakes from a finished session',
    contain
  )
]

const misrShots = [
  shot(
    'misr-image-selector/compare-zoom.jpg',
    'Original image between two super-resolved versions, with the synchronised zoom lens on all three',
    contain
  ),
  shot(
    'misr-image-selector/compare.jpg',
    'Comparison view with the slider for choosing which side image is closer to the original',
    contain
  )
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
        :shots="sheetsolverShots"
        eager
        shots-label="sheetsolver.gbrzeczek.dev"
        note="Built with Claude Code. I designed the architecture, directed the port of the solver and verified it against packingsolver on its test instances."
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
        note="Built with Claude Code. I designed the architecture and the classification pipeline."
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
        title="toefl-grammar-learner"
        :links="[
          { label: 'Live', href: 'https://toefl-grammar-learner.vercel.app' },
          { label: 'GitHub', href: 'https://github.com/gbrzeczek/toefl-grammar-learner' }
        ]"
        :tags="['Next.js', 'TypeScript', 'Drizzle', 'libSQL']"
        :shots="toeflShots"
        shots-label="toefl-grammar-learner.vercel.app"
        note="Built with Claude Code. I designed the study flow and the scheduling."
      >
        <p>
          A <span class="accent">grammar trainer for the TOEFL ITP</span> with a bank of over a
          thousand questions, timed practice, a review of wrong answers and a study calendar.
          Questions are scheduled with my own implementation of <span class="accent">FSRS-5</span>,
          the spaced-repetition algorithm, so each one comes back right before you're likely to
          forget it.
        </p>
        <p>
          Built with <span class="accent">Next.js</span>, Auth.js and
          <span class="accent">Drizzle</span> on libSQL, deployed on Vercel.
        </p>
      </ProjectCard>

      <ProjectCard
        title="MisrImageSelector"
        :links="[{ label: 'GitHub', href: 'https://github.com/gbrzeczek/MisrImageSelector' }]"
        :tags="['.NET', 'Angular', 'SQLite', 'GitHub Actions']"
        :shots="misrShots"
        shots-label="gbrzeczek.github.io/MisrImageSelector"
      >
        <p>
          A small tool built for my master's thesis on
          <span class="accent">perceptual metrics for multi-image super-resolution</span>.
          Participants compare super-resolved images side by side with a synchronised zoom lens and
          pick the one that looks best. Each vote is stored with the image's
          <span class="accent">LPIPS</span> score, so human preference can be checked against the
          metric.
        </p>
      </ProjectCard>

      <ProjectCard
        title="Voting machine"
        :links="[{ label: 'YouTube', href: 'https://youtu.be/BABlTRHFsPk' }]"
        :tags="['AVR', 'Embedded C', 'Python']"
      >
        <p>
          A university project - a prototype voting system with an
          <span class="accent">ATMega 328P</span> main station and
          <span class="accent">ATtiny 85</span> voting stations, plus remote voting through a small
          Python app. The main challenge was fitting both the local and remote functionality into
          the very limited memory of the <span class="accent">microcontroller</span>.
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
