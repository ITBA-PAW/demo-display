<script setup lang="ts">
import { onUnmounted, reactive } from 'vue'
import axios from 'axios'
import { styles } from '../stores/counter'

const timerId = setInterval(async () => {
  const syls = (
    await axios.get<{ group: number; style: string }[]>('https://api.juarce.com/styles/')
  ).data
  styles.newStyles(
    syls.map((aux) => {
      return aux.style
    })
  )
  console.log(styles)
}, 10000)
onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<template>
  <div class="container">
    <div class="frame" v-for="(style, index) in styles.style" :style="style">
      <h1>Grupo {{ index + 1 }}</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 30px;
}
.frame {
  width: auto !important;
  height: auto !important;
  border: 1px solid black;
  overflow: hidden !important;
}
</style>
