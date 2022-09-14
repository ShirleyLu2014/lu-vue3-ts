<template>
  <div class="common-layout">
    <el-container class="container-style">
      <el-aside class="aside" :width="isFold ? '60px' : '200px'">
        <nav-menu :isCollapse="isFold"></nav-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <nav-header @handleFoldEmit="handleFoldEmit"></nav-header>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { NavMenu } from "@/components/navMenu"
import { NavHeader } from "@/components/navHeader"
const isFold = ref(false)
const handleFoldEmit = (e: boolean) => {
  console.log("e", e)
  isFold.value = e
  console.log("改变", isFold.value)
}
</script>

<style scoped lang="less">
.common-layout {
  .container-style {
    @apply h-screen w-screen;
    .aside {
      @apply bg-indigo-200;
    }
    .header {
      @apply h-40px w-screen bg-gray-50 pl-0;
    }
    .main {
      @apply h-screen w-screen  bg-indigo-100;
    }
  }
}
</style>
