<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '../../api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
const channelList = ref([])

const loading = ref(false)

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
  console.log(channelList.value)
}
getChannelList()

const onEditChannel = (row, $index) => {
  console.log(row, $index)
}

const onDelChannel = (row, $index) => {
  console.log(row, $index)
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button>添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <!-- rou 指 channelList 的一项， $index 指下标 -->
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
      <!-- 当数据为空时自定义的内容 -->
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
  </page-container>
</template>

<style lang="scss" scoped></style>
