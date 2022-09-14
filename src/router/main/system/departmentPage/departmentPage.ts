const department = () =>
  import("@/views/main/system/departmentPage/departmentPage.vue")
export default {
  path: "/main/system/department",
  name: "department",
  component: department,
  children: []
}
