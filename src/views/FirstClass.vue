<script setup lang="ts">
import { onUnmounted, reactive, ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { styles } from '../stores/counter'
import { useRoute } from 'vue-router'

const route = useRoute()
const totalUsers = ref(9) // Default to 9 if not specified
const offset = ref(0) // Default offset is 0

onMounted(() => {
  // Get the users parameter from the URL
  const usersParam = route.query.users
  if (usersParam && !isNaN(Number(usersParam))) {
    totalUsers.value = Number(usersParam)
  }
  
  // Get the offset parameter from the URL
  const offsetParam = route.query.offset
  if (offsetParam && !isNaN(Number(offsetParam))) {
    offset.value = Number(offsetParam)
  }
  
  // Initialize the styles array with empty strings for each user
  const emptyStyles = Array(totalUsers.value).fill('')
  styles.newStyles(emptyStyles)
})

// Calculate the grid dimensions based on the total number of users
const gridDimensions = computed(() => {
  const columns = Math.ceil(Math.sqrt(totalUsers.value))
  return {
    columns,
    rows: Math.ceil(totalUsers.value / columns)
  }
})

const timerId = setInterval(async () => {
  const syls = (
    await axios.get<{ group: number; style: string }[]>('https://api.juarce.com/styles/')
  ).data
  
  // Map all styles from the API response
  const allStyles = syls.map(aux => aux.style)
  
  // Apply offset and take only the number of styles we need
  let stylesArray: string[] = []
  if (offset.value < allStyles.length) {
    // Slice the array starting from the offset
    stylesArray = allStyles.slice(offset.value, offset.value + totalUsers.value)
  }
  
  // If we have fewer styles than needed after applying offset, pad with empty strings
  while (stylesArray.length < totalUsers.value) {
    stylesArray.push('')
  }
  
  styles.newStyles(stylesArray)
  console.log('Styles updated:', {
    total: allStyles.length,
    offset: offset.value,
    displayed: stylesArray.length
  })
}, 10000)

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<template>
  <div class="container" :style="{ 
    'grid-template-columns': `repeat(${gridDimensions.columns}, 1fr)`,
    'grid-template-rows': `repeat(${gridDimensions.rows}, 1fr)`
  }">
    <div class="frame" v-for="(style, index) in styles.style" :key="index" :style="style">
      <h1>Grupo {{ index + 1 }}</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  font-size: 30px;
}
.frame {
  width: auto !important;
  height: auto !important;
  border: 1px solid black;
  overflow: hidden !important;
}
</style>
