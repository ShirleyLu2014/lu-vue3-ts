import type { App } from "vue"
import registerElement from "./element-register" // 按需引入element-plus
export function globalRegister(app: App): void {
  app.use(registerElement)
}
