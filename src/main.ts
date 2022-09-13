import { createApp } from "vue"
import "normalize.css"
import "@/assets/css/index.less"
import "virtual:windi.css"
import App from "./App.vue"
import { globalRegister } from "./global"
import router from "@/router"
// import luRequest from "@/service"
// luRequest.get({}).then((res) => {
//   console.log(res)
// })
const app = createApp(App)
app.use(globalRegister)
app.use(router)
app.mount("#app")
