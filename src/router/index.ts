import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import {Modal} from 'ant-design-vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log(to, from)
  Modal.destroyAll()

  // 阻止跳转
  // return false
})

export default router
