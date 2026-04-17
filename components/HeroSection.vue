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

const { $lenis } = useNuxtApp() as any
const open = ref(false)

function scrollTo(id: string) {
  open.value = false
  const el = document.getElementById(id)
  if (!el) return
  if ($lenis && typeof $lenis.scrollTo === 'function') {
    $lenis.scrollTo(el, { offset: -40, duration: 1.6 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
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
        <span class="eyebrow"><a href="https://www.instagram.com/coverjenniekim" target="_blank" rel="noopener">@coverjenniekim</a><span class="eyebrow__extra"> · cover tributo · 2025</span></span>
        <button @click="scrollTo('contact')" class="eyebrow red">● now booking</button>
      </div>

      <h1 class="hero__title display">
        <span class="line">i am</span>
        <span class="line italic red script">Julia</span>
        <span class="line">as</span>
        <span class="line italic script">Jennie.</span>
      </h1>

      <div class="hero__bottom">
        <p class="hero__tag">
          Performance, energia e atitude.<br />
          Uma homenagem ao universo de <strong>Jennie Kim</strong> — da
          estreia com <strong>BLACKPINK</strong> à era solo.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped src="./HeroSection.css"></style>
