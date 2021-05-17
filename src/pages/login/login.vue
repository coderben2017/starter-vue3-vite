<template>
  <div class="container">
    <div class="header">
      <h1>Vue3 & Ant Design</h1>
    </div>
    <div class="content">
      <LoginForm @success="handleLogin"></LoginForm>
    </div>
    <div class="footer">
      供学习交流使用
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import {useRouter} from 'vue-router'
  import {message} from 'ant-design-vue'
  import LoginForm from "./form.vue"

  export default defineComponent({
    name: "login",
    components: {
      LoginForm
    },
    setup() {
      const router = useRouter()

      const handleLogin = (): void => {
        message.success('登录成功')
        router.replace('/index')
      }

      return {
        handleLogin
      }
    }
  })
</script>

<style scoped lang="less">
  .container {
    position: relative;
    height: 100vh;
    background-color: #f7f7f7;
    overflow: hidden;

    .header {
      margin-top: 10%;
      text-align: center;
    }

    .content {
      margin-top: 5%;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
    }

    .footer {
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
</style>
