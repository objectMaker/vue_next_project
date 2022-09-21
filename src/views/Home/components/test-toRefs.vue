<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    {{ state.person.age }}
    <el-button @click="handleAddAge"></el-button>
    <el-input v-model="state.person.age"></el-input>
  </div>
</template>
<script setup lang="ts">
import { toRefs, defineProps } from "vue";
const props = defineProps<{
  state: {
    person: {
      name: string;
      age: number;
    };
  };
}>();
const { state } = toRefs(props);
function handleAddAge() {
  state.value.person.age++;
}
</script>
<style scoped lang="scss"></style>
