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
            <span class="eyebrow">adicione seu reel em /public/reel.mp4</span>
          </div>
        </template>
        <div class="reel__overlay" aria-hidden="true" />
        <div class="reel__ticker">
          <span>live · stage · atitude · you &amp; me · solo · like jennie — </span>
          <span>live · stage · atitude · you &amp; me · solo · like jennie — </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reel {
  padding: 160px 0;
  background: #000;
  border-top: 1px solid var(--c-line);
  border-bottom: 1px solid var(--c-line);
}
.reel__head {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 60px;
}
.reel__title {
  font-size: clamp(54px, 9vw, 160px);
  line-height: 0.92;
}
.reel__title .italic { font-style: italic; color: var(--c-red); }

.reel__player {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--c-line);
  background:
    radial-gradient(circle at 30% 40%, rgba(214, 0, 28, 0.35), transparent 55%),
    radial-gradient(circle at 80% 70%, rgba(138, 0, 18, 0.3), transparent 50%),
    #0a0000;
}
.reel__player video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.reel__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: rgba(255, 255, 255, 0.4);
}
.reel__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
  pointer-events: none;
}
.reel__ticker {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  gap: 80px;
  font-family: var(--f-display);
  font-style: italic;
  font-size: clamp(20px, 3vw, 36px);
  white-space: nowrap;
  animation: ticker 22s linear infinite;
  color: rgba(255, 255, 255, 0.9);
  pointer-events: none;
}
@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
