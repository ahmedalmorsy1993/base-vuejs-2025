import { useAuthStore } from '@/stores/auth'
import { defineAsyncComponent } from 'vue'
import { type RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    redirect: "/auth/login",
    beforeEnter: (to, from, next) => {
      const isAuthenticated = useAuthStore().isAuthenticated
      if (!isAuthenticated) {
        next()
      } else {
        next('/')
      }
    },
    component: defineAsyncComponent(() => import('@/layouts/auth/index.vue')),
    children: [
      {
        path: 'login',
        name: 'login',
        component: defineAsyncComponent(() => import('@/views/auth/Login.vue')),
      },
    ]
  },
]
