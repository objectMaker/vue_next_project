import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css"; //全局引入重置样式表

createApp(App).use(router).mount("#app");
