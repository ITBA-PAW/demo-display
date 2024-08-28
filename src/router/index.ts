import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FirstClass.vue'
import DeployTest from '@/views/DeployTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/deploy',
      name: 'deploy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DeployTest
    }
  ]
})

export default router
