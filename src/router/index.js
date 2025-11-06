import { createRouter, createWebHistory } from 'vue-router'

import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import TripView from '@/views/TripView.vue'
import TripCreateView from '@/views/CreateTripView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:username',
      name: 'user',
      component: ProfileView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/trip/:tripId',
      name: 'trip',
      component: TripView,
    },
    {
      path: '/trip/create',
      name: 'trip-create',
      component: TripCreateView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
