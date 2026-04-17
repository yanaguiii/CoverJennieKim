<script setup lang="ts">
// Para adicionar o reel principal, substitua `videoSrc` por /public/reel.mp4 (ou uma URL)
const videoSrc: string | null = null
</script>

<template>
  <section id="reel" class="reel">
    <div class="container">
      <div class="reel__head reveal">
        <span class="eyebrow">featured reel — 2026</span>
        <h2 class="display reel__title">
          <span class="italic">press</span> play.
        </h2>
      </div>

      <div class="reel__player reveal">
        <template v-if="videoSrc">
          <video :src="videoSrc" autoplay muted loop playsinline />
        </template>
        <template v-else>
          <div class="reel__placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="1" />
              <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
            </svg>
            <span class="eyebrow">reels</span>
          </div>
        </template>
        <div class="reel__overlay" aria-hidden="true" />
        <!--
        <div class="reel__ticker">
          <span>live · stage · atitude · you &amp; me · mantra · like jennie</span>
          <span>live · stage · atitude · you &amp; me · mantra · like jennie</span>
        </div>
        -->
      </div>
    </div>
  </section>
</template>

<style scoped src="./ReelSection.css"></style>
