import luRequest from "../../index"

import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return luRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return luRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return luRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return luRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
