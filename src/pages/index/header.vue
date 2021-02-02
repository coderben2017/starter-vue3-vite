<template>
  <a-layout-header class="header">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed"/>
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed"/>
    <a-dropdown class="i18n">
      <a-avatar>
        <template v-slot:icon>
          <GlobalOutlined/>
        </template>
      </a-avatar>
      <template v-slot:overlay>
        <a-menu v-model="language" @click="handleLanguageChange">
          <a-menu-item key="zhCN">中文简体</a-menu-item>
          <a-menu-item key="zhTW">
              中文繁體
          </a-menu-item>
          <a-menu-item key="enUS">
              English
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-dropdown class="user">
      <a-avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
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
  import {ref, computed} from 'vue'
  import {useRouter} from 'vue-router'
  import {useStore} from 'vuex'
  import {
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    LogoutOutlined,
    GlobalOutlined
  } from '@ant-design/icons-vue';
  import {Modal} from 'ant-design-vue'

  export default {
    name: "index-header",
    components: {
      UserOutlined,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
      SettingOutlined,
      LogoutOutlined,
      GlobalOutlined
    },
    props: {
      collapsed: {
        type: Boolean,
        required: true
      }
    },
    setup(props, context) {
      const router = useRouter()
      const store = useStore()

      const collapsed = ref(props.collapsed)
      const language = computed(() => [store.state.language])

      const toggleCollapsed = () => {
        collapsed.value = !collapsed.value
        context.emit('update:collapsed', collapsed.value)
      }
      const handleLanguageChange = ({key}) => store.commit('setLanguage', key)
      const handleSetting = () => context.emit('setting')
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
        language,
        toggleCollapsed,
        handleLanguageChange,
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

    .i18n {
      position: absolute;
      right: 70px;
      top: 16px;
    }

    .user {
      position: absolute;
      right: 20px;
      top: 16px;
    }
  }
</style>
