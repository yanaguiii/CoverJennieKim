<script setup lang="ts">
const chapters = [
  {
    year: '2016',
    title: 'primeiro encontro',
    text: 'Descobri BLACKPINK ainda nos primeiros videoclipes. Aquilo não foi só música — foi atitude, energia, identidade. Um universo que eu queria habitar.'
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
    text: 'Hoje me apresento em eventos, festivais e encontros de fãs pelo Brasil. Este site é o meu palco digital.'
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

<style scoped src="./StorySection.css"></style>
