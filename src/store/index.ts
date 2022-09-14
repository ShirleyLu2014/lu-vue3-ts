import { createStore, Store, useStore as useVuexStore } from "vuex"
import type { IRootState, IStoreType } from "./types"
import login from "./login"
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "",
      age: 0
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export default store
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
