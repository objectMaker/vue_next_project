<template>
  <div class="home">我是home哟</div>
  <div>{{ homeWords }}</div>
  <div>{{ name }}</div>
  <div>{{ comName }}</div>
  <Login />
</template>

<script lang="ts" setup>
import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { userInfoStore as b } from "@/store/userInfo";
import Login from "./Login/Login.vue";
let a = b();
let { name, comName } = storeToRefs(a);

const homeWords = ref("homeWords");
interface objInterface {
  obj: string;
}

onMounted(() => {
  axios.get("/userInfo").then(
    (res: AxiosResponse<objInterface>) => {
      console.log(res, "res");
    },
    (err: AxiosError) => {
      console.log(err, "err");
    }
  );
  setTimeout(() => {
    // name as any .value = "fjdsajfdsa";
    name.value = "我是想要做缓存的vuex数据";
    localStorage.setItem("name", name.value);
    console.log("三秒之后执行了");
  }, 3000);
});
</script>
