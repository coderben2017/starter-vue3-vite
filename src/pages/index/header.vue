<template>
  <a-layout-header class="header">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed"/>
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed"/>
    <a-dropdown class="dropdown">
      <a-avatar>
        <template v-slot:icon>
          <UserOutlined/>
        </template>
      </a-avatar>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:" @click="handleSetting">
              <SettingOutlined/>
              个人设置
            </a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:" @click="handleLogout">
              <LogoutOutlined/>
              退出登录
            </a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  import {
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    LogoutOutlined
  } from '@ant-design/icons-vue';
  import {Modal} from 'ant-design-vue'

  export default {
    name: "index-header",
    components: {
      UserOutlined,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
      SettingOutlined,
      LogoutOutlined
    },
    props: {
      collapsed: {
        type: Boolean,
        required: true
      }
    },
    setup(props, context) {
      const router = useRouter()

      const collapsed = ref(props.collapsed)

      const toggleCollapsed = () => {
        collapsed.value = !collapsed.value
        context.emit('update:collapsed', collapsed.value)
      }
      const handleSetting = () => {
        context.emit('setting')
      }
      const handleLogout = () => {
        Modal.confirm({
          title: '系统提示',
          content: '确定要退出登录吗？',
          onOk: () => {
            router.replace('/login')
          }
        })
      }

      return {
        collapsed,
        toggleCollapsed,
        handleSetting,
        handleLogout
      }
    },
  }
</script>

<style scoped lang="less">
  .header {
    position: relative;
    padding: 0;
    background-color: #fff;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 16px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .dropdown {
      position: absolute;
      right: 20px;
      top: 16px;
    }
  }
</style>
