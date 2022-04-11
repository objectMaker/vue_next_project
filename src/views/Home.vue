<template>
  <div class="home">我是home哟</div>
  <div>{{ homeWords }}</div>
</template>

<script lang="ts" setup>
import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
import { ref, onMounted } from "vue";
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
});
</script>
