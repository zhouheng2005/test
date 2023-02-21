<template>
  <div class="g-container-layout" :class="classObj">
    <Mobile />
    <!-- <LayoutVertical v-if="device === 'mobile'" /> v-else-->
    <component :is="LayoutComponents[themeConfig.mode]" />
    <!-- <Theme /> -->
  </div>
</template>

<script setup lang="ts">
import Mobile from "./components/Mobile/index.vue";
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutHorizontal from './LayoutHorizontal/index.vue'
// import Theme from '@/components/Theme/index.vue'
import { computed,watch } from 'vue'
import store from "@/store/index"
import { useResizeHandler } from "./hooks/useResizeHandler";
const { settingStore }  = store()
const themeConfig = computed(() => settingStore.themeConfig)
const LayoutComponents = {
  horizontal: LayoutHorizontal,
  vertical: LayoutVertical,
};

// 是否折叠
const isCollapse = computed(() => {
  return !SettingStore.isCollapse
})
let { device } = useResizeHandler();

watch(()=>device.value,(val)=>{
  let vertical = val==='mobile'?'vertical':themeConfig.value.mode
  const body = document.body as HTMLElement;
  body.setAttribute("class", `layout-${vertical}`);
},{
  immediate:true
})

// 当屏幕切换的时候进行变换
const classObj = computed(() => {
  return {
    hideSidebar: !settingStore.isCollapse,
    openSidebar: settingStore.isCollapse,
    withoutAnimation: settingStore.withoutAnimation,
    mobile: device.value === 'mobile',
  }
})
</script>

<style lang="scss" scoped>
.g-container-layout {
  height: 100%;
  width: 100%;
  .main-container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.sidebar-container {
  display: flex;
  flex-direction: column;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 90;
}
</style>
