<template>
  <el-form :model="loginData" :rules="rules" ref="formRef">
    <el-form-item label="账号" prop="userName">
      <el-input v-model="loginData.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginData.password" show-password></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
import { reactive, ref } from "vue"
import { accountRules as rules } from "../config"
import { ElForm } from "element-plus/lib/index"
import localCache from "@/utils/cache"
const store = useStore()
const loginData = reactive({
  userName: "",
  password: ""
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  console.log("登陆操作")
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      console.log(valid)
      // 判断是否需要缓存密码
      if (isKeepPassword) {
        localCache.setCache("userName", loginData.userName)
        localCache.setCache("password", loginData.password)
      } else {
        localCache.deleteCache("userName")
        localCache.deleteCache("password")
      }
      store.dispatch("login/accountLoginAction", { ...loginData })
    } else {
      return
    }
  })
}
defineExpose({ loginAction })
</script>

<style scoped></style>
