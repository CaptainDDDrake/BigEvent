<script setup>
/**
 * 在 Vue3 CompositionAPI 中
 * 1. 获取路由对象 router useRouter
 *    const router = userRouter()
 * 2. 获取路由参数 route useRoute
 *    const route = useRoute()
 */
import { useRoute, useRouter } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores'

const router = useRouter()
const route = useRoute()

const goList = () => {
  console.log(router, route)
  router.push('/list')
}

const userStore = useUserStore()
const useCount = useCountStore()
</script>

<template>
  <div>
    <hr />
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    <h1>test1</h1>
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表首页</el-button>

    <h1>test2</h1>
    <p>{{ userStore.token }}</p>
    <button @click="userStore.setToken('token2')">change</button>
    <button @click="userStore.removeToken()">remove</button>

    <h1>test3</h1>
    <p>{{ useCount.count }}</p>
    <el-button @click="useCount.add(2)">+2</el-button>
  </div>
</template>

<style scoped></style>
