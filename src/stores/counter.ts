import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const styles = reactive({
  style: [
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
  ],
  
  newStyles(stylesAux: string[]) {
    this.style = stylesAux
  }
})


export const styles2 = defineStore('styles' , () => {
  const style = ref([
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
  ]);
})