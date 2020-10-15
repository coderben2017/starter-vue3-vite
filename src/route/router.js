import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  // 阻止跳转
  // return false
})

export default router
