<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

function onMove(e: MouseEvent) {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 30
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 30
}

onMounted(() => window.addEventListener('mousemove', onMove))
onBeforeUnmount(() => window.removeEventListener('mousemove', onMove))
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__bg">
      <div
        class="hero__portrait"
        :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }"
      >
        <div class="hero__portrait-inner" />
      </div>
      <div class="hero__grid" aria-hidden="true" />
    </div>

    <div class="container hero__content">
      <div class="hero__top">
        <span class="eyebrow">@coverjenniekim · cover tributo · 2026</span>
        <span class="eyebrow red">● now booking</span>
      </div>

      <h1 class="hero__title display">
        <span class="line">i am</span>
        <span class="line italic red">julia</span>
        <span class="line">as</span>
        <span class="line italic">jennie.</span>
      </h1>

      <div class="hero__bottom">
        <p class="hero__tag">
          Performance, moda e atitude.<br />
          Uma homenagem ao universo de <strong>Jennie Kim</strong> — da
          estreia com <strong>BLACKPINK</strong> à era solo.
        </p>
        <a class="hero__scroll" href="#work">
          <span>scroll</span>
          <svg width="12" height="48" viewBox="0 0 12 48"><path d="M6 0v46m-4-4l4 4 4-4" stroke="currentColor" fill="none" stroke-width="1" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  padding: 160px 0 60px;
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse at 70% 40%, rgba(214, 0, 28, 0.35), transparent 60%),
    radial-gradient(ellipse at 20% 90%, rgba(138, 0, 18, 0.3), transparent 55%),
    linear-gradient(180deg, #060606 0%, #0a0000 100%);
}
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--c-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-line) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.4;
  mask-image: radial-gradient(ellipse at center, #000 0%, transparent 80%);
}
.hero__portrait {
  position: absolute;
  top: 12%;
  right: 6%;
  width: 42vw;
  max-width: 620px;
  aspect-ratio: 3 / 4;
  transition: transform 0.6s var(--ease);
}
.hero__portrait-inner {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08), transparent 55%),
    linear-gradient(145deg, #1a0003 0%, #2a0005 30%, #4e000a 60%, #d6001c 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 30px 80px rgba(214, 0, 28, 0.25),
    inset 0 0 120px rgba(0, 0, 0, 0.6);
}
.hero__portrait-inner::before {
  content: 'JULIA';
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: var(--f-display);
  font-style: italic;
  font-size: clamp(60px, 8vw, 140px);
  color: rgba(255, 255, 255, 0.1);
  letter-spacing: -0.02em;
}
.hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.hero__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero__title {
  font-size: clamp(70px, 14vw, 240px);
  line-height: 0.88;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 90%;
}
.hero__title .line {
  display: block;
}
.hero__title .italic {
  font-style: italic;
  padding-left: 0.25em;
}
.hero__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  border-top: 1px solid var(--c-line);
  padding-top: 24px;
}
.hero__tag {
  max-width: 380px;
  font-size: 15px;
  line-height: 1.55;
  color: #cfcfcf;
}
.hero__tag strong {
  color: #fff;
  font-weight: 600;
}
.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--c-muted);
  transition: color 0.3s;
}
.hero__scroll:hover { color: var(--c-red); }
.hero__scroll svg { animation: pulse 2.4s infinite ease-in-out; }
@keyframes pulse {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
}
@media (max-width: 820px) {
  .hero__portrait { width: 70vw; top: 16%; right: -10%; }
  .hero__bottom { flex-direction: column; align-items: flex-start; }
}
</style>
