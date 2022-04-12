<template>
  <div>我是登录页面</div>
  <input type="text" placeholder="账号" v-model="account" />
  <input type="text" placeholder="密码" v-model="password" password />
  <button @click="getInfo">点击获取数据</button>
  <hr />
  <Input v-model:nam="name" />
</template>
<script setup>
import Input from "./components/Input/Input";
import { ref } from "vue";
const account = ref("");
const password = ref("");
const name = ref("n");
const getInfo = () => {
  console.log("username:", account.value);
  console.log("password:", password.value);
};
</script>
<style scoped lang="scss"></style>
