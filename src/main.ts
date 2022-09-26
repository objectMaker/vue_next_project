import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css"; //全局引入重置样式表
// import "@/mock/index.ts";
import animate from "animate.css";
import "./index.css";
import { createPinia } from "pinia";
import "./Plugins/testDecorator";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const pinia = createPinia();
createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(animate)
  .use(pinia)
  .mount("#app");
