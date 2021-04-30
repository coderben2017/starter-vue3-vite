<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<script>
  import {computed} from 'vue'
  import {useStore} from 'vuex'
  import zh_CN from 'ant-design-vue/es/locale/zh_CN'
  import zh_TW from 'ant-design-vue/es/locale/zh_TW'
  import en_US from 'ant-design-vue/es/locale/en_US'

  export default {
    name: 'App',
    setup() {
      const store = useStore()

      const locale = computed(() => {
        switch (store.state.language) {
          case 'zhCN': return zh_CN
          case 'zhTW': return zh_TW
          case 'enUS': return en_US
          default: return zh_CN
        }
      })

      return {
        locale
      }
    }
  }
</script>
