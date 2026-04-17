<script setup lang="ts">
const props = defineProps<{
  text?: string
  reverse?: boolean
}>()

const text = props.text ?? 'like jennie · mantra · you & me · dracula · zen · seoul city · extraL'
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

<style scoped src="./MarqueeBar.css"></style>
