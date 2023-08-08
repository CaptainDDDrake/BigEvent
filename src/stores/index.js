import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// 导出modules模块
// Plan1:
import { useUserStore } from './modules/user'
export { useUserStore }
import { useCountStore } from './modules/counter'
export { useCountStore }

// Plan2:
export * from './modules/user' // 接收 user 模块的所有按需导出
export * from './modules/counter'
