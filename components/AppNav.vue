<script setup lang="ts">
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
  <header class="nav">
    <div class="nav__inner container">
      <a class="nav__brand" href="#top" @click.prevent="scrollTo('top')">
        <span class="brand-mark">J</span>
        <span class="brand-name">julia <em>as</em> jennie</span>
      </a>

      <nav class="nav__links" :class="{ 'is-open': open }">
        <button @click="scrollTo('work')">Work</button>
        <button @click="scrollTo('story')">Story</button>
        <button @click="scrollTo('reel')">Reel</button>
        <button @click="scrollTo('contact')">Contact</button>
      </nav>

      <button class="nav__burger" :class="{ 'is-open': open }" @click="open = !open" aria-label="menu">
        <span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped src="./AppNav.css"></style>
