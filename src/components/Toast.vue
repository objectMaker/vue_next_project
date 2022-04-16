<template>
  <div v-if="dialogVisible">
    <div>{{ content }}</div>
    <button @click="closeDialogVisible">关闭弹窗</button>
  </div>
</template>
<script setup lang="ts">
import { ref, defineExpose } from "vue";
const content = ref("");
const dialogVisible = ref(false);
const showDialog = (val: string) => {
  dialogVisible.value = true;
  content.value = val;
};
const closeDialogVisible = () => {
  dialogVisible.value = false;
};
defineExpose({
  showDialog,
});
</script>
<style scoped lang="scss"></style>
