<script setup lang="ts">
// Placeholders — substitua `media` por caminhos reais em /public
// Ex: media: '/work/evento-1.jpg' ou '/work/clipe.mp4'
const works = [
  { id: 1, title: 'LIKE JENNIE', place: 'São Paulo · 2025', tag: 'stage', span: 'wide', media: null, accent: true },
  { id: 2, title: 'YOU & ME', place: 'K-Pop Fest · 2025', tag: 'stage', span: 'tall', media: null },
  { id: 3, title: 'MANTRA', place: 'BP Tribute Night', tag: 'choreo', span: 'small', media: null },
  { id: 4, title: 'WITH THE IE', place: 'Studio Cover · 2024', tag: 'mv', span: 'small', media: null },
  { id: 5, title: 'SOLO', place: 'Rio · 2024', tag: 'choreo', span: 'wide', media: null },
  { id: 6, title: 'ZEN', place: 'Anime Friends BR · 2024', tag: 'stage', span: 'tall', media: null }
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

<style scoped src="./WorkSection.css"></style>
