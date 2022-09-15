<template>
  <div class="user">
    <div class="search-box">
      <lu-form :formConfig="searchFormConfig"></lu-form>
    </div>
    <div class="content-box">content-box</div>
  </div>
</template>

<script setup="{name: 'user'}" lang="ts">
import { ref, reactive } from "vue"
import searchFormConfig from "./config/searchFrom.config"
import LuForm from "@/baseUI/form"
</script>

<style scoped></style>
