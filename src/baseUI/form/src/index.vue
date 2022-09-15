<template>
  <el-form :label-width="formConfig.labelWidth">
    <el-row>
      <template v-for="item in formConfig.formItems" :key="item.label">
        <el-col v-bind="formConfig.colLayout">
          <el-form-item
            v-if="!item.isHidden"
            :label="item.label"
            :rules="item.rules"
            :style="formConfig.itemStyle"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                :show-password="item.type === 'password'"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                style="width: 100%"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                  >{{ option.title }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                style="width: 100%"
                v-bind="item.otherOptions"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { IForm } from "../types"
const props = defineProps<{
  formConfig: {
    type: IForm
    default: () => {
      labelWidth: "100px"
      colLayout: {
        xl: 6 // >1920px 4个
        lg: 8
        md: 12
        sm: 24
        xs: 24
      }
      itemStyle: { padding: "10px 40px" }
      formItems: []
    }
  }
}>()
</script>

<style scoped></style>
