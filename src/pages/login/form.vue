<template>
  <a-form :label-col="{span: 4}" :wrapper-col="{span: 20}">
    <a-form-item label="账号" v-bind="validateInfos.account">
      <a-input v-model:value="model.account" placeholder="请输入账号">
        <template v-slot:prefix>
          <UserOutlined />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="密码" v-bind="validateInfos.password">
      <a-input v-model:value="model.password" password placeholder="请输入密码">
        <template v-slot:prefix>
          <LockOutlined />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{span: 24}">
      <a-button type="primary" block @click="handleSubmit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
  import { reactive } from 'vue'
  import { useForm } from '@ant-design-vue/use'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

  export default {
    name: "login-form",
    components: {
      UserOutlined,
      LockOutlined
    },
    setup() {
      const model = reactive({
        account: undefined,
        password: undefined
      })
      const rules = {
        account: [
          {required: true, message: '请输入账号'}
        ],
        password: [
          {required: true, message: '请输入密码'},
          {min: 6, max: 18, message: '密码应为6~18位'},
        ],
      }
      const { validate, validateInfos } = useForm(model, rules)
      return {
        model,
        validate,
        validateInfos,
      }
    },
    methods: {
      handleSubmit: function () {
        this.validate().then(() => {
          // TODO: 真实登录
          console.log(this.model)

          this.$emit('success')
        })
      }
    }
  }
</script>

