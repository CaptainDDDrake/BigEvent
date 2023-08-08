import { createRouter, createWebHistory } from 'vue-router'

// CreateRouter 创建路由实例
const router = createRouter({
  // history 确定选择的路由模式，这里选择history模式，即网页的表示形式为：
  // http://xxx/user
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由：登陆页
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    // 一级路由：布局架子
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    }
  ]
})

// 导出创建的router
export default router
