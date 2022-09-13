import type { Module } from "vuex"
import { IRootState } from "../types"
import { ILoginState } from "./types"
import localCache from "@/utils/cache"
import { useRouter } from "vue-router"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: {},
      userMenu: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: {}) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: []) {
      state.userMenu = userMenu
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log("登录action")
      console.log(payload)
      const res = await accountLoginRequest({
        name: payload.userName,
        password: payload.password
      })
      const { id, token } = { ...res.data }
      commit("changeToken", token)
      localCache.setCache("token", token)
      console.log("res", id, token)

      // 请求用户信息
      const infoRes = await requestUserInfoById(id)
      const userInfo = infoRes.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 请求用户菜单
      const userMenuRes = await requestUserMenusByRoleId(userInfo.role.id)
      console.log("userMenuRes", userMenuRes)
      const userMenu = userMenuRes.data
      commit("changeUserMenu", userMenu)
      const router = useRouter()
      // router.push("/main")
    }
  }
}
export default loginModule
