import { useAuthStore } from '@/stores/auth'
import { type RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      const isAuthenticated = useAuthStore().isAuthenticated
      if (isAuthenticated) {
        next()
      } else {
        next('/auth/login')
      }
    },
    component: () => import('@/layouts/default/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/Users.vue'),
      },
    ]
  },
]
