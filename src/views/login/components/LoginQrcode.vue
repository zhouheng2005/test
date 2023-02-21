<template>
  <div class="login-qrcode">
    <!-- <vue-qr text="https://github.com/zouzhibin/vue-admin-perfect" ></vue-qr> -->
  </div>
</template>

<script setup lang="ts">
//需安装npm i vue-qr插件使用
// import vueQr from 'vue-qr/src/packages/vue-qr.vue'
</script>

<style lang="scss" scoped>
.login-qrcode {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
  }
}
</style>
