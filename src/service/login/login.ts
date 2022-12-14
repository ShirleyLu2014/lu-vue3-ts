import luRequest from "../index"

import type { IAccount, ILoginResult } from "./type"
import { IDataType } from "../types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/" // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return luRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return luRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return luRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
