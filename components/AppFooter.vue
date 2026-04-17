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
          <p class="eyebrow">social</p>
          <a href="https://www.instagram.com/coverjenniekim" target="_blank">Instagram</a>
          <a href="https://wa.me/5521966997227?text=Oi%20Julia!%20Quero%20falar%20sobre%20um%20evento." target="_blank" rel="noopener">WhatsApp</a>
        </div>
        <div class="footer__col">
          <p class="eyebrow">born in</p>
           <a href="https://wa.me/5521966997227?text=Oi%20Julia!%20Quero%20falar%20sobre%20um%20evento." target="_blank" rel="noopener">Brasil — disponível p/ eventos</a>
        </div>
      </div>

      <div class="footer__bottom">
        <a href="https://www.instagram.com/coverjenniekim" target="_blank" rel="noopener">© {{ year }} @coverjenniekim · cover tributo</a>
        <span>sem afiliação oficial com YG / BLACKPINK / JENNIE</span>
      </div>
    </div>
  </footer>
</template>

<style scoped src="./AppFooter.css"></style>
