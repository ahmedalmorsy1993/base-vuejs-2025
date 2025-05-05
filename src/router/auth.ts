import { useAuthStore } from '@/stores/auth'
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
    component: () => import('@/layouts/auth/index.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
      },
    ]
  },
]
