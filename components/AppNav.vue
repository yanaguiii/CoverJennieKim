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

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 18px 0;
  mix-blend-mode: difference;
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.nav__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}
.brand-mark {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--c-red);
  color: #fff;
  display: grid;
  place-items: center;
  font-family: var(--f-display);
  font-style: italic;
  font-size: 16px;
  font-weight: 700;
}
.brand-name {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
}
.brand-name em {
  color: var(--c-red);
  font-style: italic;
  font-family: var(--f-display);
  text-transform: none;
  letter-spacing: 0;
  padding: 0 4px;
}
.nav__links {
  display: flex;
  gap: 34px;
}
.nav__links button {
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.85;
  transition: opacity 0.3s, color 0.3s;
  font-weight: 500;
}
.nav__links button:hover {
  opacity: 1;
  color: var(--c-red);
}
.nav__burger {
  display: none;
  width: 36px;
  height: 36px;
  position: relative;
}
.nav__burger span {
  display: block;
  position: absolute;
  left: 6px;
  right: 6px;
  height: 1px;
  background: #fff;
  transition: transform 0.4s var(--ease), top 0.4s var(--ease);
}
.nav__burger span:first-child { top: 14px; }
.nav__burger span:last-child { top: 20px; }
.nav__burger.is-open span:first-child { top: 17px; transform: rotate(45deg); }
.nav__burger.is-open span:last-child { top: 17px; transform: rotate(-45deg); }

@media (max-width: 820px) {
  .nav__burger { display: block; }
  .nav__links {
    position: fixed;
    inset: 0;
    background: #000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s var(--ease);
  }
  .nav__links.is-open {
    opacity: 1;
    pointer-events: auto;
  }
  .nav__links button {
    font-size: 18px;
  }
}
</style>
