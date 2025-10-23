import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile/:id',
      name: 'home',
      component: ProfileView,
    },
  ],
})

export default router
