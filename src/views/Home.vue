<template>
  <div class="home">我是home哟</div>
  <div>{{ homeWords }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const homeWords = ref("homeWords");
</script>
