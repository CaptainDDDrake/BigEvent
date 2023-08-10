import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

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

/**
 * 路由守卫:
 * 登陆访问拦截 => 默认是直接放行
 * 根据返回值决定, 是放行还是拦截
 * 返回值:
 * 1. undefined / true 直接放行
 * 2. false 拦回from的地址页面
 * 3. 具体路径 或 路径对象  拦截到对应的地址
 * 'login'  {name: 'login'}
 */
router.beforeEach((to) => {
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'
})

// 导出创建的router
export default router
