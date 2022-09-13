<template>
  <div class="common-layout">
    <el-container class="container-style">
      <el-aside class="aside">Aside</el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.common-layout {
  .container-style {
    @apply h-screen w-screen;
    .aside {
      @apply bg-sky-400  w-210px;
    }
    .header {
      @apply h-80px w-screen bg-indigo-200;
    }
    .main {
      @apply h-screen w-screen  bg-indigo-100;
    }
  }
}
</style>
