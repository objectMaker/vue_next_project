<template>
  <div>Home</div>
  <testToRefs :state="state" />
  <el-button @click="handleChangeObj">改变</el-button>
  <div>{{ state.person.age }}</div>
</template>
<script setup lang="ts">
import testToRefs from "./components/test-toRefs.vue";
const a = ref<number>(1);
const props = defineProps(["foo", "bar"]);
const state = reactive({
  person: {
    name: "ybf",
    age: 10,
  },
});
function handleChangeObj() {
  state.person = {
    name: "手抖",
    age: 11111,
  };
}
</script>
<style scoped lang="scss"></style>
