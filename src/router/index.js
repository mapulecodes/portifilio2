import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // component: () =>import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>import('@/views/HomeView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () =>import('@/views/HomeView.vue')
  },
{
  path: '/experiences',
  name: 'experiences',
  component: () =>import('@/views/HomeView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router