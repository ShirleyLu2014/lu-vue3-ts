<template>
  <el-form :model="loginData" :rules="rules" ref="formRef">
    <el-form-item label="账号" prop="userName">
      <el-input v-model="loginData.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginData.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from "vue"
import { accountRules as rules } from "../config"
import { ElForm } from "element-plus/lib/index"
const loginData = reactive({
  userName: "",
  password: ""
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  console.log("登陆操作")
  formRef.value?.validate((valid: boolean) => {
    console.log(valid)
  })
}
defineExpose({ loginAction })
</script>

<style scoped></style>
