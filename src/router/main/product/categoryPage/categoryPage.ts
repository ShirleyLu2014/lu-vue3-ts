const category = () =>
  import("@/views/main/product/categoryPage/categoryPage.vue")
export default {
  path: "/main/product/category",
  name: "category",
  component: category,
  children: []
}
