<template>
  <div
    :style="{ height: `${themeConfig.showTag ? 90 : 50}px` }"
    v-if="themeConfig.fixedHeader"
  ></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import store from "@/store/index";
const { settingStore } = store();
const themeConfig = computed(() => settingStore.themeConfig);
</script>
