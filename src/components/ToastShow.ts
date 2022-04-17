import Toast from "./Toast.vue";
import { createApp } from "vue";
type toastParams =
  | string
  | {
      content: string;
    };
//展示toast组件
let toast: any;
export default {
  showToast(toastParams: toastParams): void {
    let props: {
      [key: string]: string;
    } = {
      content: "默认内容",
    };
    if (typeof toastParams === "string") {
      props.content = toastParams;
    } else {
      props = toastParams as { [key: string]: string };
    }
    //全局安装组件
    const app = createApp(Toast, toastParams as { [key: string]: string });
    const node = document.createElement("div");
    toast = app.mount(node);
    document.body.appendChild(toast.$el);
  },
  closeToast(): void {
    document.body.removeChild(toast.$el);
  },
};
