import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/question/1',
      component: () => import('../views/Question1View.vue')
    },
    {
      path: '/question/2',
      component: () => import('../views/Question2View.vue')
    },
    {
      path: '/question/3',
      component: () => import('../views/Question3View.vue')
    },
    {
      path: '/question/4',
      component: () => import('../views/Question4View.vue')
    }
  ]
})

export default router
