<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const styles = [
  `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``
]
</script>

<template>
  <div class="container">
    <div class="frame" v-for="(style, index) in styles" :style="style">
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
