<script setup lang="ts">
const props = defineProps<{
  text?: string
  reverse?: boolean
}>()

const text = props.text ?? 'you & me · like jennie · pink venom · flower · shut down · kill this love'
</script>

<template>
  <div class="marquee" :class="{ reverse }">
    <div class="marquee__track">
      <div v-for="i in 6" :key="i" class="marquee__item">
        <span class="display italic">{{ text }}</span>
        <span class="dot">●</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  position: relative;
  padding: 26px 0;
  border-top: 1px solid var(--c-line);
  border-bottom: 1px solid var(--c-line);
  background: #000;
  overflow: hidden;
  white-space: nowrap;
}
.marquee__track {
  display: inline-flex;
  gap: 40px;
  animation: slide 40s linear infinite;
  will-change: transform;
}
.marquee.reverse .marquee__track {
  animation-direction: reverse;
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 40px;
  font-size: clamp(36px, 6vw, 88px);
  font-family: var(--f-display);
  font-style: italic;
  line-height: 1;
  color: #fff;
}
.marquee__item .dot { color: var(--c-red); font-size: 24px; font-style: normal; }
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
