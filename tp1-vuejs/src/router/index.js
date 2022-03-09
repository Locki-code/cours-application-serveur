import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
