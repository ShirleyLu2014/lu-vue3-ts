import type { App } from "vue"
import "element-plus/theme-chalk/base.css"
import "element-plus/theme-chalk/index.css"
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import {
  User,
  Lock,
  Calendar,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ArrowDown
} from "@element-plus/icons-vue" // 小图标部分引入
const ElementPlusIconsVue = [
  User,
  Lock,
  Calendar,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ArrowDown
]
import { toLine } from "@/utils"
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRow,
  ElCol,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElSelect,
  ElOption,
  ElDatePicker
} from "element-plus/lib/index"
const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRow,
  ElCol,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElSelect,
  ElOption,
  ElDatePicker
]
export default function registerElement(app: App) {
  // 注册组件
  for (const component of components) {
    app.component(component.name, component)
  }
  // 注册图标
  for (const icon of ElementPlusIconsVue) {
    app.component(`el-icon-${toLine(icon.name)}`, icon)
  }
  // for (const key in ElementPlusIconsVue) {
  //   app.component(`el-icon-${toLine(key)}`, ElementPlusIconsVue[key]);
  // }
}
