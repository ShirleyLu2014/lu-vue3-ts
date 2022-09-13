<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./cpns/loginPanel.vue"
</script>

<style scoped lang="less">
.login {
  background: url("../../assets/img/login-bg.svg");
  @apply flex items-center justify-center min-h-screen;
}
</style>
