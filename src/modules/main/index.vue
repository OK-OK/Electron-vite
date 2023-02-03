<!--
 * @Author: JL Guan
 * @Date: 2022-12-01 15:45:43
 * @description: file description
 * @LastEditTime: 2022-12-01 16:00:38
 * @FilePath: \vite-builder\src\modules\main\index.vue
-->
<template>
  <a-config-provider 
    :locale="zhCN" 
    :form="form"
    :input="input"
  >
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const form = {  
  validateMessages: {
    required: '${label} 不能为空'
  }
}
const input = {
  autocomplete: 'off'
}
</script>
