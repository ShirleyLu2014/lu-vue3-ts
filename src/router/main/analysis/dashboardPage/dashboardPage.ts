const dashboard = () =>
  import("@/views/main/analysis/dashboardPage/dashboardPage.vue")
export default {
  path: "/main/analysis/dashboard",
  name: "dashboard",
  component: dashboard,
  children: []
}
