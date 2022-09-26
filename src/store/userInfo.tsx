import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const userInfoStore = defineStore("user", () => {
  //就像是自定义hooks的
  const name = ref("ybf");
  const comName = computed(() => {
    return name.value + "____computed";
  });
  const localName = localStorage.getItem("name");
  localName && (name.value = localName);
  return { name, comName };
});
