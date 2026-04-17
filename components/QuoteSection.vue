<template>
  <section class="quote">
    <div class="container">
      <div class="reveal">
        <span class="eyebrow">words to live by</span>
        <blockquote class="display quote__text">
          <span>“</span>
          <span>i'm not a doll —</span>
          <span class="italic red">i'm</span>
          <span class="italic">the</span>
          <span>director</span>
          <span>of</span>
          <span class="italic">my</span>
          <span>own show.</span>
          <span>”</span>
        </blockquote>
        <p class="quote__by">— mood · 2026</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote {
  padding: 180px 0;
  background: var(--c-bg);
}
.quote__text {
  font-size: clamp(44px, 7.5vw, 130px);
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em 0.3em;
  max-width: 1200px;
  font-weight: 400;
}
.quote__text .italic { font-style: italic; }
.quote__by {
  margin-top: 40px;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--c-muted);
}
</style>
