const user = () => import("@/views/main/system/userPage/userPage.vue")
export default {
  path: "/main/system/user",
  name: "user",
  component: user,
  children: []
}
