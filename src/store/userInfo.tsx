import {defineStore } from 'pinia';
import {ref} from 'vue';
export const userInfoStore = defineStore('user',()=>{
    //就像是自定义hooks的
    const name = ref('ybf');
    const localName =  localStorage.getItem('name')
    if(localName){
        name.value = localName;
    }
    return {name}
})