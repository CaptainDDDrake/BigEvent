import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('token') // 定义 token
    const setToken = (t) => (token.value = t) // 设置 token
    const removeToken = () => {
      token.value = ''
    }
    return { token, setToken, removeToken }
  },
  {
    persist: true // 持久化
  }
)
