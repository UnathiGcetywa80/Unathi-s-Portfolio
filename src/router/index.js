import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/TestimonialsView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

