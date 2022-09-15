<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="user-name">{{ userName }}</span>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <!-- <el-icon-arrowdown /> -->
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登陆</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store"
import { ref, computed } from "vue"
const store = useStore()
const userName = computed(() => store.state.login.userInfo.name)
console.log("userName", userName.value)
</script>

<style scoped lang="less">
.el-dropdown-link {
  @apply flex items-center;
}
</style>
