import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from './auth'
import { dashboardRoutes } from './dashboard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...dashboardRoutes,
    ...authRoutes,
  ],
})

export default router
