<template>
  <div class="home">我是home哟</div>
  <div>{{ homeWords }}</div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const homeWords = ref("homeWords");
onMounted(() => {
  axios.get("/userInfo").then(
    (res: any) => {
      console.log(res, "res");
    },
    (err: any) => {
      console.log(err, "err");
    }
  );
});
</script>
