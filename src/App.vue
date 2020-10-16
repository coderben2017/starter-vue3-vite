<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<script>
  import {reactive} from 'vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'

  export default {
    name: 'App',
    setup() {
      const locale = reactive(zhCN)

      return {
        locale
      }
    }
  }
</script>
