import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/l/:id',
      name: 'home',
      component: Login
    },
    {
      path: '/c/:id/coupon/:generate',
      name: 'coupon',
      component: () => import("../views/Coupon/Coupon.vue"),
    },
    {
      name: "not-found",
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ]
})

export default router
