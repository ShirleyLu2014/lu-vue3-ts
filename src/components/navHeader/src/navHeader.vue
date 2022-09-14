<template>
  <div class="nav-header">
    <el-icon-fold :sixe="40" v-if="isFold" @click="handleFold" />
    <el-icon-expand v-if="!isFold" @click="handleExpand" />
    <div class="content">
      <div class="content-left">ssssmianbaoxie</div>
      <div class="content-right">用户信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"
const emit = defineEmits(["handleFoldEmit"])
const isFold = ref(false)
const handleFold = () => {
  console.log("1111")
  isFold.value = false
  emit("handleFoldEmit", isFold.value)
}
const handleExpand = () => {
  console.log("2211")
  isFold.value = true
  emit("handleFoldEmit", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  @apply flex items-center;
  .content {
    border: 1px solid #f00;
    width: 100%;
    @apply flex justify-between items-center;
  }
}
</style>
