import { createRouter, createWebHistory } from 'vue-router'

// CreateRouter 创建路由实例
const router = createRouter({
  // history 确定选择的路由模式，这里选择history模式，即网页的表示形式为：
  // http://xxx/user
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

// 导出创建的router
export default router
