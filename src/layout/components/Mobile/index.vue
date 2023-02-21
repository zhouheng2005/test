<template>
  <div
    v-if="device === 'mobile' && !isCollapse"
    class="drawer-bg"
    @click="handleClickOutside"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useResizeHandler } from "../../hooks/useResizeHandler";
import store from "@/store/index";

let { device } = useResizeHandler();
const { settingStore } = store();

// 是否折叠
const isCollapse = computed(() => !settingStore.isCollapse);

// 移动端点击
const handleClickOutside = () => {
  settingStore.closeSideBar({ withoutAnimation: false });
};
</script>

<style lang="scss" scoped></style>
