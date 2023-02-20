<template>
  <h1>首页</h1>
  <div style="display: flex;gap:20px">
    <button v-for="item in routes" @click="handleClick(item.path)"> {{ item.name }}</button>
  </div>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
{{ userStore.userInfo.nickName }}
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { TestApi, GetDynamicRoutes } from '../apis'
import store from "@/store/index";
import { useRouter } from 'vue-router'
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
const { routesStore,userStore } = store();
const router = useRouter()
// 动态路由表
const routes = computed(() => routesStore.routes)
// 路由按钮点击事件
const handleClick = (path: string) => {
  router.push({ path })
}
onMounted(() => {
  if (routesStore.routes.length < 1) {
    // 获取动态路由
    GetDynamicRoutes().then(res => {
      routesStore.addRoutes(res.data.data, router);
      console.log( routesStore.routes)
    })
  }
  // 测试接口
  TestApi().then(res => console.log(res.data)).catch(err => console.log(err))
})
</script>