<script setup lang="ts">
import { onUnmounted } from 'vue'
import { pages } from '../stores/counter'

const timerId = setInterval(async () => {
  pages.increment()
}, 10000)
onUnmounted(() => {
  clearInterval(timerId)
})
</script>
<template>
  <div class="container">
    <div class="sideview">
      <div class="frame" v-for="(page, index) in pages.pages">
        <h1>Grupo {{ index + 1 }}</h1>
      </div>
    </div>
    <div class="centerview">
      <iframe :src="pages.getCurrentPage()" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.sideview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20px;
  .frame {
    h1 {
      margin: 10px;
    }
  }
}
.centerview {
  display: flex;
  flex: 1;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
