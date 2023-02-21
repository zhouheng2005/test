<template>
  <!--纵向布局-->
  <Height />
  <div
    class="m-layout-header"
    :class="{
      'fixed-header': themeConfig.fixedHeader,
      collapse: themeConfig.fixedHeader && isCollapse,
      'no-collapse': themeConfig.fixedHeader && !isCollapse,
    }"
  >
    <div class="header-inner">
      <HeaderToolLeft />
      <HeaderToolRight />
    </div>
    <!-- <TagsView v-if="themeConfig.showTag" /> -->
  </div>
</template>

<script lang="ts" setup>
// 引入组件
import Height from "../../components/Header/components/Height.vue";
import HeaderToolLeft from "../../components/Header/ToolLeft.vue";
import HeaderToolRight from "../../components/Header/ToolRight.vue";
// import TagsView from "../../components/TagsView/index.vue";
import { computed } from "vue";
import store from "@/store/index";
const { settingStore } = store();
// 主题配置
const themeConfig = computed(() => settingStore.themeConfig);
const isCollapse = computed(() => !settingStore.isCollapse);
</script>

<style lang="scss" scoped>
.mobile {
  .m-layout-header {
    left: 0 !important;
    width: 100% !important;
  }
}
.show-tag {
  height: 90px;
}

.zb-no-fixed-header {
  width: 100% !important;
}

.m-layout-header {
  width: 100%;
  background: white;
  transition: width 0.28s;
  flex-shrink: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .header-inner {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 10px 0 0;
    box-sizing: border-box;
    justify-content: space-between;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
}
.collapse {
  width: calc(100% - 60px);
}
.no-collapse {
  width: calc(100% - 210px);
}

.el-dropdown {
  display: flex;
  height: 100%;
  align-items: center;
}

.transverseMenu {
  display: flex;
  .el-menu {
    overflow: hidden;
  }
  :deep(.el-menu-item) {
    height: 100% !important;
  }
  .tool-bar-right {
    display: flex;
    justify-content: flex-end;
    min-width: 300px;
    flex-shrink: 0;
  }
}
</style>
