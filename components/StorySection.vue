<script setup lang="ts">
const chapters = [
  {
    year: '2016',
    title: 'primeiro encontro',
    text: 'Descobri BLACKPINK ainda nos primeiros videoclipes. Aquilo não foi só música — foi atitude, moda, identidade. Um universo que eu queria habitar.'
  },
  {
    year: '2018',
    title: 'começo no cover',
    text: 'As primeiras coreografias em casa viraram apresentações amadoras. Estudei cada detalhe do grupo — entradas, olhares, as pausas que fazem o palco respirar.'
  },
  {
    year: '2021',
    title: 'escolhendo jennie',
    text: 'Entre as quatro, a Jennie sempre falou mais comigo. A postura, o carisma, a dualidade entre cool girl e delicadeza. Aí decidi: ia ser a cover dela.'
  },
  {
    year: '2023',
    title: 'era solo',
    text: 'Com o lançamento de “You & Me” e a carreira solo da Jennie, aprofundei minhas performances — mais técnica, mais expressão, mais presença.'
  },
  {
    year: 'hoje',
    title: 'cover oficial',
    text: 'Hoje me apresento em eventos, festivais e encontros de fãs pelo Brasil. Este site é o meu palco digital — e ele está só começando.'
  }
]
</script>

<template>
  <section id="story" class="story">
    <div class="story__mark" aria-hidden="true">
      <span class="display italic">history</span>
    </div>

    <div class="container">
      <header class="story__head reveal">
        <span class="eyebrow">a história — <span class="red">from blackpink to jennie</span></span>
        <h2 class="display story__title">
          do <span class="italic">fandom</span><br />
          ao <span class="italic red">palco.</span>
        </h2>
      </header>

      <ol class="timeline">
        <li
          v-for="(c, i) in chapters"
          :key="c.year"
          class="chapter reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="chapter__year">
            <span>{{ c.year }}</span>
            <span class="dot">●</span>
          </div>
          <div class="chapter__body">
            <h3 class="chapter__title display">{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.story {
  position: relative;
  padding: 180px 0 160px;
  background: linear-gradient(180deg, #050505 0%, #0b0000 50%, #050505 100%);
  overflow: hidden;
}
.story__mark {
  position: absolute;
  top: 40px;
  left: -2vw;
  right: -2vw;
  text-align: center;
  opacity: 0.05;
  pointer-events: none;
  font-size: clamp(180px, 30vw, 520px);
  color: #fff;
  line-height: 1;
  white-space: nowrap;
}
.story__head {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 90px;
  position: relative;
  z-index: 2;
}
.story__title {
  font-size: clamp(54px, 9vw, 160px);
  line-height: 0.92;
}
.story__title .italic { font-style: italic; }

.timeline {
  list-style: none;
  position: relative;
  z-index: 2;
  display: grid;
  gap: 0;
  border-top: 1px solid var(--c-line);
}
.chapter {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 60px;
  padding: 48px 0;
  border-bottom: 1px solid var(--c-line);
  transition: background 0.5s var(--ease);
}
.chapter:hover { background: rgba(214, 0, 28, 0.04); }
.chapter__year {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--f-display);
  font-style: italic;
  font-size: 44px;
  color: var(--c-red);
  line-height: 1;
}
.chapter__year .dot {
  font-size: 10px;
  color: var(--c-ink);
  opacity: 0.5;
}
.chapter__body {
  max-width: 640px;
}
.chapter__title {
  font-size: clamp(28px, 3.2vw, 44px);
  margin-bottom: 16px;
  font-style: italic;
}
.chapter__body p {
  font-size: 16px;
  line-height: 1.65;
  color: #c5c5c5;
}
@media (max-width: 720px) {
  .chapter { grid-template-columns: 1fr; gap: 12px; padding: 32px 0; }
  .chapter__year { font-size: 32px; }
}
</style>
