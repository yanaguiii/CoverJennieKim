<script setup lang="ts">
// Placeholders — substitua `media` por caminhos reais em /public
// Ex: media: '/work/evento-1.jpg' ou '/work/clipe.mp4'
const works = [
  { id: 1, title: 'LIKE JENNIE', place: 'São Paulo · 2025', tag: 'live', span: 'wide', media: null, accent: true },
  { id: 2, title: 'YOU & ME', place: 'K-Pop Fest · 2025', tag: 'stage', span: 'tall', media: null },
  { id: 3, title: 'PINK VENOM', place: 'BP Tribute Night', tag: 'choreo', span: 'small', media: null },
  { id: 4, title: 'FLOWER', place: 'Studio Cover · 2024', tag: 'mv', span: 'small', media: null },
  { id: 5, title: 'KILL THIS LOVE', place: 'Rio · 2024', tag: 'live', span: 'wide', media: null },
  { id: 6, title: 'SHUT DOWN', place: 'Cypher BR · 2024', tag: 'stage', span: 'tall', media: null }
]
</script>

<template>
  <section id="work" class="work">
    <div class="container">
      <header class="work__head reveal">
        <span class="eyebrow">selected work — <span class="red">(2024—2026)</span></span>
        <h2 class="display work__title">
          palco, <span class="italic red">câmera</span><br />
          e <span class="italic">performance</span>.
        </h2>
      </header>

      <div class="work__grid">
        <article
          v-for="(w, i) in works"
          :key="w.id"
          class="card reveal"
          :class="[`card--${w.span}`, { 'card--accent': w.accent }]"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <div class="card__media">
            <!-- Substitua por <img src="w.media" /> ou <video src="..." autoplay muted loop playsinline /> -->
            <template v-if="w.media">
              <video
                v-if="/\.(mp4|webm|mov)$/i.test(w.media)"
                :src="w.media"
                autoplay muted loop playsinline
              />
              <img v-else :src="w.media" :alt="w.title" />
            </template>
            <div v-else class="card__placeholder">
              <span class="display italic">{{ w.title }}</span>
              <span class="eyebrow">inserir mídia</span>
            </div>
          </div>
          <div class="card__meta">
            <span class="eyebrow">{{ w.tag }}</span>
            <h3 class="card__title">{{ w.title }}</h3>
            <span class="card__place">{{ w.place }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: 180px 0 140px;
  background: var(--c-bg);
}
.work__head {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
}
.work__title {
  font-size: clamp(54px, 9vw, 160px);
  line-height: 0.92;
}
.work__title .italic { font-style: italic; }

.work__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;
}
.card--wide { grid-column: span 4; }
.card--tall { grid-column: span 2; }
.card--small { grid-column: span 2; }

.card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: #101010;
  overflow: hidden;
  border: 1px solid var(--c-line);
  transition: transform 0.6s var(--ease), border-color 0.4s;
}
.card--tall .card__media { aspect-ratio: 3 / 4; }
.card--accent .card__media {
  background: linear-gradient(135deg, #2a0005 0%, #8a0012 60%, #d6001c 100%);
}
.card__media img,
.card__media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease), filter 0.6s;
  filter: grayscale(40%) contrast(1.05);
}
.card:hover .card__media img,
.card:hover .card__media video { transform: scale(1.05); filter: grayscale(0) contrast(1.1); }
.card:hover .card__media { border-color: var(--c-red); }

.card__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.4);
}
.card__placeholder .display { font-size: clamp(28px, 5vw, 72px); }
.card--accent .card__placeholder { color: rgba(255, 255, 255, 0.6); }

.card__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
}
.card__title {
  font-family: var(--f-display);
  font-size: 22px;
  font-weight: 400;
}
.card__place {
  font-size: 12px;
  color: var(--c-muted);
  letter-spacing: 0.08em;
}

@media (max-width: 960px) {
  .work__grid { grid-template-columns: repeat(2, 1fr); }
  .card--wide, .card--tall, .card--small { grid-column: span 2; }
  .card--small { grid-column: span 1; }
  .card--tall { grid-column: span 1; }
}
</style>
