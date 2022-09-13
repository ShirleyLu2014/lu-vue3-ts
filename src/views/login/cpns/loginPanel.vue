<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="tabs-label">
            <el-icon-user />
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="tabs-label">
            <el-icon-iphone />
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import LoginAccount from "./loginAccount.vue"
import LoginPhone from "./loginPhone.vue"
import { ref } from "vue"
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref("account")
const isKeepPassword = ref(true)
const handleLoginClick = () => {
  console.log("hahaha")
  if (currentTab.value === "account") {
    console.log("账号登录")
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    return
  }
}
</script>

<style scoped lang="less">
.login-panel {
  @apply w-320px h-320px text-center;
  .title {
    @apply mb-4 font-bold;
  }
  .account-control {
    @apply flex justify-between text-sm;
  }
  .login-btn {
    @apply w-320px mt-4;
  }
}
</style>
