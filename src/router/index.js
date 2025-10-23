import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import TripView from '@/views/TripView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:username',
      name: 'user',
      component: ProfileView,
    },
    {
      path: '/trip/:tripId',
      name: 'trip',
      component: TripView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
