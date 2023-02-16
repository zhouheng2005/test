<template>
  <h1>Page One</h1>
  <button @click="handleClick">Home</button>
  <button @click="handleeitl('zhou')">修改用户名</button>
  <button @click="handleeitl1('zhou1111')">修改用户名</button>
</template>

<script lang="ts" setup>
import store from "@/store/index";
import { useRouter } from 'vue-router';

const { userStore } = store();
const handleeitl = (name:any) => {
  userStore.userInfo.nickName = name
}
const handleeitl1 = (name:any) => {
  userStore.userInfo.nickName = name
}
const router = useRouter()
const handleClick = () => router.push({ path: '/Home' })
</script>