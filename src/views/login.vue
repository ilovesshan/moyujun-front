<template>
  <div class="register">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">登录</span>
        </div>
      </template>
      <el-form :model="form" label-width="100px" label-position="left">
        <el-form-item label="用户名/邮箱" :required="true">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" :required="true">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="验证码" :required="true">
          <el-input v-model="form.password" />
          <img style="margin-left: 10px;" width="100" height="36" src="http://localhost:9001/captcha"/>
        </el-form-item>
        <el-form-item>
          <el-button class="register-btn" type="primary" @click="register">登录</el-button>
          <el-link type="primary" href="/register">没有账号，去注册!</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// do not use same name with ref
const form = reactive({
  email: '',
  verifyCode: '',
  username: '',
  password: '',
})

const getEmailVerifyCode = () => {
  console.log('getEmailVerifyCode!')
}

const register = () => {
  console.log('register!')
}
</script>

<style scoped lang="scss">
.register {
  width: 100%;
  margin: 10px 0 20px 0;

  .box-card {
    width: 70%;
    margin-left: 200px;

    .el-input {
      width: 300px;
    }

    .title {
      font-size: 22px;
      font-weight: 600;
    }

    .register-btn {
      margin-right: 10px;
    }
  }
}
</style>