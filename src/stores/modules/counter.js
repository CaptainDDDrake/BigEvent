import { defineStore } from 'pinia'
import { ref } from 'vue'

// 计数器模块
export const useCountStore = defineStore('big-count', () => {
  const count = ref(100) // 定义 token
  const add = (n) => {
    count.value += n
  }

  return { count, add }
})
