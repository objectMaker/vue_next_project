<template>
  <div>我是登录页面</div>
  <input type="text" placeholder="账号" v-model="account" />
  <input type="text" placeholder="密码" v-model="password" password />
  <button @click="getInfo">点击获取数据</button>
  <button @click="getUserInfo">点击获取数据</button>
  <button
    class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
  >
    Hover me
  </button>
  <div class="flex flex-row bg-red-50">
    <div>测试弹性</div>
    <div>盒子</div>
  </div>
  <hr />
  <Input v-model:nam="name" />
  <Toast ref="toast" />
  <button @click="showSomeThing">点击显示弹窗</button>
</template>
<script setup>
import { instance } from "@/request";
import Input from "./components/Input/Input";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { userInfoStore } from "@/store/userInfo";
import Toast from "@/components/Toast";
const showSomeThing = () => {
  console.log(Toast);
  console.log(toast.value.showDialog("弹窗内容"));
};
const toast = ref(null);
const { name } = storeToRefs(userInfoStore());
const account = ref("");
const password = ref("");
// const name = ref("n");
const getInfo = () => {
  console.log("password:", password.value);
  console.log("username:", account.value);
};
const getUserInfo = async () => {
  const res = await instance.get("/get", {
    params: {
      name: "ddd",
      age: 2134,
    },
  });
  console.log(res, "ressss");
};
</script>
<style scoped lang="scss"></style>
