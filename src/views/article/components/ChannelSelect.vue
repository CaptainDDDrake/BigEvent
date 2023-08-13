<script setup>
import { artGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  // console.log(channelList.value)
}
getChannelList()
</script>

<template>
  <!-- label 展示给用看， value收集起来提交给后台看 -->
  <!-- data for test
  <el-select>
    <el-option label="新闻" value="110"></el-option>
    <el-option label="新闻" value="137"></el-option>
  </el-select> -->
  <el-select
    :model-value="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :style="{ width }"
  >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
