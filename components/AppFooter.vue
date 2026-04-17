<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="footer">
    <div class="container footer__inner">
      <div class="footer__huge display">
        <span>get in</span>
        <span class="italic red">touch</span>
      </div>

      <div class="footer__grid">
        <div class="footer__col">
          <p class="eyebrow">booking</p>
          <a href="">WhatsApp</a>
        </div>
        <div class="footer__col">
          <p class="eyebrow">social</p>
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">TikTok</a>
          <a href="#" target="_blank">YouTube</a>
        </div>
        <div class="footer__col">
          <p class="eyebrow">baseada em</p>
          <span>Brasil — disponível p/ eventos</span>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© {{ year }} @coverjenniekim · cover tributo</span>
        <span>sem afiliação oficial com YG / BLACKPINK / JENNIE</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 140px 0 40px;
  background: #000;
  border-top: 1px solid var(--c-line);
  overflow: hidden;
}
.footer__inner {
  display: grid;
  gap: 80px;
}
.footer__huge {
  font-size: clamp(80px, 18vw, 260px);
  line-height: 0.88;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: var(--f-display);
}
.footer__huge .italic {
  font-style: italic;
}
.footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--c-line);
}
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.footer__col p {
  margin-bottom: 6px;
}
.footer__col a,
.footer__col span {
  font-size: 16px;
  color: var(--c-ink);
  transition: color 0.3s;
}
.footer__col a:hover {
  color: var(--c-red);
}
.footer__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-muted);
  padding-top: 30px;
  border-top: 1px solid var(--c-line);
}
@media (max-width: 720px) {
  .footer__grid { grid-template-columns: 1fr; gap: 28px; }
  .footer__bottom { flex-direction: column; gap: 10px; }
}
</style>
