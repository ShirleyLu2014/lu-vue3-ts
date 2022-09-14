<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-text-color="#6366f1"
      background-color="#a5b4fc"
      text-color="#fff"
      collapse-transition
    >
      <template v-for="item in userMenu" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon-user />
              <span>{{ item.name }}</span>
              <!-- <i :class="item.icon" v-if="item.icon"></i> -->
            </template>
            <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
            <!-- <i :class="item.icon" v-if="item.icon"></i>
            <span>{{ item.name }}</span> -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="String(subitem.id)"
                @click="handleMenuItemClick(subitem)"
              >
                <i :class="subitem.icon" v-if="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else>
          <el-menu-item :index="String(item.id)">
            <i :class="item.icon" v-if="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
import { ref, computed } from "vue"
import { useStore } from "@/store"
import localCache from "@/utils/cache"
const props = defineProps(["isCollapse"])
console.log("props.isFold", props.isCollapse)
const store = useStore()
// const userMenu = computed(() => store.state.login.userMenu)
const userMenu = computed(() => localCache.getCache("userMenu"))
console.log("token", userMenu)
// event handle
const handleMenuItemClick = (item: any) => {
  console.log("--------")
  router.push({
    path: item.url ?? "/not-found"
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  .logo {
    @apply flex justify-start items-center;
  }
  .img {
    @apply w-40px h-40px;
  }
}
</style>
