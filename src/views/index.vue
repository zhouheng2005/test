<template>
  <h1>Home1</h1>
</template>

<script setup lang="ts" >
import { TestApi } from '../apis'
TestApi().then(res => console.log(res)).catch(err => console.log(err))
</script>