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
          <el-input type="password" :disabled="!isSendEmailCode" v-model="originPwd" placeholder="填写全世界独一无二的密码" />
        </el-form-item>
        <el-form-item>
          <el-button :disabled="(form.email == '') || (form.verifyCode == '') || (originPwd == '')" class="register-btn"
            type="primary" @click="register">立即注册</el-button>
          <el-link type="primary" href="/login">已注册，直接登录!</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from '@/utils/toast'

import type { UserRegisterDto } from "@/interface/user";

import RandomUserName from "@/utils/randomUsername";
import Encrypt from "@/utils/encrypt";

import * as userApi from '@/api/user';
import * as checkCodeApi from '@/api/checkCode';


const isSendEmailCode = ref(false);
const originPwd = ref("");

const form = reactive<UserRegisterDto>({
  "email": "",
  "password": "",
  "registerFrom": 4,
  "salt": "",
  "username": "",
  "verifyCode": ""
})

const getEmailVerifyCode = async () => {
  if (form.email.trim() == "" || !form.email.includes("@qq.com")) {
    Message.error("请填写QQ电子邮箱");
    return;
  }
  const response = await checkCodeApi.getEmialVerifyCode(form.email);
  if (response.code == 200) {
    Message.success(response.message);
    isSendEmailCode.value = true;
  } else {
    Message.error(response.message);
  }
}

const register = async () => {
  if (form.email.trim() == "" || !form.email.includes("@qq.com")) {
    Message.error("请填写QQ电子邮箱");
    return;
  }

  if (form.verifyCode.trim() == "") {
    Message.error("请填写QQ电子邮箱验证码");
    return;
  }

  if (originPwd.value.trim() == "") {
    Message.error("请填写第一无二的密码");
    return;
  }

  // 请求盐
  const response1 = await userApi.getUserSalt()
  if (response1.code == 200) {
    form.salt = response1.data;
  }

  // 随机生成用户名
  if (form.username.trim() == "") {
    form.username = RandomUserName.genetaror();
  }

  // 对密码进行加盐以及MD5加密处理
  const pwd = Encrypt.encrypted(originPwd + form.salt);
  if (pwd != false) {
    form.password = pwd;
  } else {
    console.log("************加密失败************");
  }
  // 请求注册
  const response2 = await userApi.singIn(form);
  if (response2.code == 200) {
    Message.success(response2.message);
  } else {
    Message.error(response2.message);
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