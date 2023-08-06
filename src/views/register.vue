<template>
  <div class="register">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">注册</span>
        </div>
      </template>
      <el-form :model="form" label-width="80px" label-position="left">
        <el-form-item label="邮箱" :required="true">
          <el-input v-model="form.email" placeholder="填写邮箱（暂支持QQ邮箱）" />
          <el-button style="margin-left: 15px;" type="primary" @click="getEmailVerifyCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" :required="true">
          <el-input :disabled="!isSendEmailCode" v-model="form.verifyCode" placeholder="填写验证码" />
        </el-form-item>
        <el-form-item label="用户名" :required="true">
          <el-input :disabled="!isSendEmailCode" v-model="form.username" placeholder="填写用户名（不填写则默认生成）" />
        </el-form-item>
        <el-form-item label="密码" :required="true">
          <el-input :disabled="!isSendEmailCode" v-model="form.password" placeholder="填写全世界独一无二的密码" />
        </el-form-item>
        <el-form-item>
          <el-button :disabled="(form.email == '') || (form.verifyCode == '') || (form.password == '')" class="register-btn" type="primary" @click="register">立即注册</el-button>
          <el-link type="primary" href="/login">已注册，直接登录!</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from '@/utils/toast'

const isSendEmailCode = ref(false);

const form = reactive({
  email: '',
  verifyCode: '',
  username: '',
  password: '',
})

const getEmailVerifyCode = () => {
  isSendEmailCode.value = true;
}

const register = () => {
  if (form.email.trim() == "") {
    Message.error("请填写QQ电子邮箱");
    return;
  }

  if (form.verifyCode.trim() == "") {
    Message.error("请填写QQ电子邮箱验证码");
    return;
  }

  if (form.password.trim() == "") {
    Message.error("请填写第一无二的密码");
    return;
  }
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
      width: 400px;
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