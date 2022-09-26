import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// const getAsyncRoutes = require.context("@/views/", true, /\.vue$/);
//webpack打包
const files = require.context("@/views", true, /\.vue$/);
const fileArray = files.keys();
const routeArr = fileArray
  .filter((item) => {
    return item.split("/").length === 3 && item.split("/")[2] === "index.vue";
  })
  .map((item) => {
    return item.split("/")[1];
  });
const routes: Array<RouteRecordRaw> = [];
routeArr.map((item) => {
  routes.push({
    name: item,
    path: "/" + item,
    component: () => import(`@/views/${item}/index.vue`),
  });
});
routes.push({
  path: "/",
  redirect: "Home",
});
routes.push({
  path: "/:pathMatch(.*)*",
  redirect: "404",
});
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
