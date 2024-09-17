import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@pages/profile')
    },
    {
      path: '/vehicles',
      component: () => import('@pages/vehicles')
    },
    {
      path: '/settings',
      component: () => import('@pages/settings')
    }
  ]
})

export default router
