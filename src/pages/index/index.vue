<template>
  <a-layout id="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedMenuKeys">
        <a-menu-item key="1">
          <user-outlined/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined/>
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed"/>
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed"/>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import {ref, reactive} from 'vue'

  export default {
    name: 'index',
    components: {
      UserOutlined,
      VideoCameraOutlined,
      UploadOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
    },
    setup() {
      const collapsed = ref(false)
      const selectedMenuKeys = reactive([])
      const toggleCollapsed = () => collapsed.value = !collapsed.value

      return {
        collapsed,
        selectedMenuKeys,
        toggleCollapsed
      }
    }
  };
</script>
<style scoped lang="less">
  #layout {
    height: 100vh;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
