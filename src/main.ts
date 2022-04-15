import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css"; //全局引入重置样式表
// import "@/mock/index.ts";
import "./index.css";
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
