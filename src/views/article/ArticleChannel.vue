<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '../../api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'
const channelList = ref([])

const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
  // console.log(channelList.value)
}
getChannelList()

const onEditChannel = (row, $index) => {
  dialog.value.open(row)
  console.log(row, $index)
}

const onDelChannel = (row) => {
  console.log(row)
}

const onAddChannel = () => {
  dialog.value.open({})
}

const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="130">
        <!-- row 指 channelList 的一项， $index 指下标 -->
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            type="primary"
            round
            plain
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            type="danger"
            round
            plain
            @click="onDelChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
