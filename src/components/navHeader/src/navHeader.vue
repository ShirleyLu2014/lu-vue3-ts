<template>
  <div class="nav-header">
    <el-icon-fold :sixe="40" v-if="isFold" @click="handleFold" />
    <el-icon-expand v-if="!isFold" @click="handleExpand" />
    <div class="content">
      <bread-crumb></bread-crumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from "./breadCrumb.vue"
import UserInfo from "./userInfo.vue"
import { ref } from "vue"
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
    width: 100%;
    @apply flex justify-between items-center pr-2;
  }
}
</style>
