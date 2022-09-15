import { createApp } from "vue"
import "normalize.css"
import "@/assets/css/index.less"
// import "@/assets/css/element.less"
import "virtual:windi.css"
import App from "./App.vue"
import { globalRegister } from "./global"
import router from "@/router"
import store from "@/store"
import { setupStore } from "./store"
// import luRequest from "@/service"
// luRequest.get({}).then((res) => {
//   console.log(res)
// })
const app = createApp(App)
setupStore()
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
