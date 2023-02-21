<template>
  <!--纵向布局-->
  <!-- <Height /> -->
  <div class="m-layout-header" :class="{ 'fixed-header': themeConfig.fixedHeader }">
    <div class="header-inner">
      <!-- <el-menu
        mode="horizontal"
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="SettingStore.themeConfig.uniqueOpened"
        :collapse-transition="false"
        class="menu-horizontal"
      >
        <SubItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
      <HeaderToolRight /> -->
    </div>
    <!-- <TagsView v-if="themeConfig.showTag" /> -->
  </div>
</template>

<script lang="ts" setup>
// 引入组件
import Height from "../../components/Header/components/Height.vue";
// import HeaderToolRight from "../../components/Header/ToolRight.vue";
// import TagsView from "../../components/TagsView/index.vue";
// import SubItem from "../../components/SubMenu/SubItem.vue";
// import { useRoute } from "vue-router";
// import { usePermissionStore } from "@/store/modules/permission";
// const PermissionStore = usePermissionStore();

// const route = useRoute();

// // 获取路由
// const permission_routes = computed(() => PermissionStore.permission_routes);
// import { computed } from "vue";
// import { useSettingStore } from "@/store/modules/setting";
// const SettingStore = useSettingStore();

// const activeMenu = computed(() => {
//   const { meta, path } = route;
//   if (meta.activeMenu) {
//     return meta.activeMenu;
//   }
//   return path;
// });

// // 主题配置
// const themeConfig = computed(() => SettingStore.themeConfig);
// const isCollapse = computed(() => !SettingStore.isCollapse);
</script>

<style lang="scss" scoped>
.m-layout-header {
  width: 100%;
  transition: width 0.28s;
  flex-shrink: 0;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .header-inner {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    background-color: $menuBg;
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

.menu-horizontal {
  flex: 1;
  overflow: hidden;
  height: 100%;
  margin-right: 20px;
  :deep(.el-menu-item) {
    height: 100%;
  }
}
</style>
