const goods = () => import("@/views/main/product/goodsPage/goodsPage.vue")
export default {
  path: "/main/product/goods",
  name: "goods",
  component: goods,
  children: []
}
