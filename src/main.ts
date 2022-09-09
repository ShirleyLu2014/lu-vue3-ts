import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { globalRegister } from "./global"
const app = createApp(App)
app.use(globalRegister)

app.mount("#app")
