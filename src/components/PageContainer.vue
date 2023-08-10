<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <!-- 默认插槽 -->
    <slot></slot>
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100%; // 最小高度: 设置元素的最小高度
  box-sizing: 100%; // 定义了 user agent 应该如何计算一个元素的总宽度和总高度
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
