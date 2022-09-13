import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
// import { firstMenu } from "@/utils/map-menus"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/loginPage.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/mainPage.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/notFound/notFound.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  // console.log(router.getRoutes())
  // console.log(to) // route对象

  // if (to.path === "/main") {
  //   console.log(firstMenu)
  //   return firstMenu.url
  // }
})

export default router
