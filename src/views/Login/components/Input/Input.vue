<template>
  <input type="text" :value="props.nam" @input="handleEmitValue" />
</template>
<script setup>
// import { defineProps } from "vue";
//获取props

// eslint-disable-next-line no-undef
const emits = defineEmits(["update:nam"]);
const handleEmitValue = (e) => {
  console.log(props.nam, "pjfjasj");
  console.log("emits触发");
  emits("update:nam", e.target.value);
};
// eslint-disable-next-line no-undef
const props = defineProps({
  nam: {
    type: String,
    default: "123",
  },
});
</script>
<style scoped lang="scss"></style>
`
