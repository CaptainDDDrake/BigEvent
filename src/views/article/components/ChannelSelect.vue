<script setup>
import { artGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

defineProps({
  cid: {
    type: [Number, String]
  }
})
const emit = defineEmits(['update:cid'])
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.datad
}
getChannelList()
</script>

<template>
  <!-- label 展示给用看， value收集起来提交给后台看 -->
  <el-select :modelValue="cid" @update:modelValue="emit('update:cid', $event)">
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
