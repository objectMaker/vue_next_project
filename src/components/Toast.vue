<template>
  <div>
    <div>{{ content }}</div>
    <!-- <button @click="closeDialogVisible">关闭弹窗</button> -->
  </div>
</template>
<script setup lang="ts">
import { ref, defineExpose } from "vue";
const content = ref("3213123");
const showDialog = (val: string) => {
  content.value = val;
};

defineExpose({
  showDialog,
});
</script>
<style scoped lang="scss"></style>
