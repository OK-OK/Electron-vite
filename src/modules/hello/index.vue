<!--
 * @Author: JL Guan
 * @Date: 2022-04-13 09:14:37
 * @description: file description
 * @LastEditTime: 2022-12-01 15:59:00
 * @FilePath: \vite-builder\src\modules\hello\index.vue
-->
<template>
  <div>{{ hello }}</div>
  <a-button>Default</a-button>
  <a-button type="primary">Primary</a-button>
  <a-button type="success">Success</a-button>
  <a-button type="info">Info</a-button>
  <a-button type="warning">Warning</a-button>
  <a-button type="danger">Danger</a-button>
  <a-button>中文</a-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const hello = ref('hello')
</script>

<style lang="scss"></style>
