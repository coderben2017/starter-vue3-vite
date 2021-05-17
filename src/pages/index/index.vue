<template>
  <a-layout id="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
        <span v-if="!collapsed">Vue3 Project</span>
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedMenuKeys">
        <a-menu-item key="1">
          <user-outlined/>
          <span>菜单1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined/>
          <span>菜单2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined/>
          <span>菜单3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <IndexHeader v-model:collapsed="collapsed" @setting="handleSetting"/>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
  import {defineComponent, ref, reactive} from 'vue'
  import {useRouter} from 'vue-router'
  import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons-vue';
  import IndexHeader from "./header.vue"

  export default defineComponent({
    name: 'index',
    components: {
      UserOutlined,
      VideoCameraOutlined,
      UploadOutlined,
      IndexHeader,
    },
    setup() {
      const router = useRouter()

      const collapsed = ref(false)
      const selectedMenuKeys = reactive([])

      const handleSetting = (): void => {
      }
      const handleLogout = (): void => {
        router.replace('/login')
      }

      return {
        collapsed,
        selectedMenuKeys,
        handleSetting,
        handleLogout
      }
    }
  })
</script>

<style scoped lang="less">
  #layout {
    height: 100vh;

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;

      img {
        max-width: 100%;
        max-height: 100%;
      }

      span {
        font-size: 20px;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
</style>
