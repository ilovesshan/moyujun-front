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
          <el-input type="password" v-model="originPwd" />
        </el-form-item>
        <!-- <el-form-item label="验证码" :required="true">
          <el-input v-model="code" />
          <img @click="refreshCheckCode" ref="checkCodeImgRef" style="margin-left: 10px; cursor: pointer;" width="100"
            height="36" src="http://localhost:9001/captcha?length=2" />
        </el-form-item> -->
        <el-form-item>
          <el-button :disabled="form.username.trim() == '' || originPwd.trim() == ''" class="register-btn" type="primary"
            @click="register">登录</el-button>
          <el-link type="primary" href="/register">没有账号，去注册!</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Message } from '@/utils/toast';

import { userStore } from "@/stores"

import type { IUserSingInDto } from "@/interface/user";

import * as userApi from '@/api/user';
import * as checkCodeApi from '@/api/checkCode';

import Encrypt from "@/utils/encrypt";


// const code = ref("");
const originPwd = ref("123456");
const checkCodeImgRef = ref<HTMLImageElement>();

const form = reactive<IUserSingInDto>({
  username: '2277505077@qq.com',
  password: '',
})

const refreshCheckCode = async () => {
  checkCodeImgRef.value!.src = `http://localhost:9001/captcha?length=2&t=${new Date().getTime()}`;
}

const register = async () => {
  if (form.username.trim() == "") {
    Message.error("请填写用户名或者邮箱");
    return;
  }

  if (originPwd.value.trim() == "") {
    Message.error("请填写第一无二的密码");
    return;
  }

  // if (code.value.trim() == "") {
  //   Message.error("请填写右边图片的验证码");
  //   return;
  // }

  // 校验验证码
  // const response1 = await checkCodeApi.checkCaptchaVerfofyCode(code.value);
  // if (response1.code != 200) {
  //   return;
  // }

  const pwd = Encrypt.encrypted(originPwd.value);
  if (pwd != false) {
    form.password = pwd;
  } else {
    console.log("************加密失败************");
  }
  const response2 = await userApi.singUp(form);
  if (response2.code == 200) {
    // 根据用户详情ID获取用户详情信息
    const userDetailInfoId = response2.data["userInfo"]["userInfoId"];
    const response3 = await userApi.getUserDetailInfo(userDetailInfoId);
    if (response3.code == 200) {
      const userInfo = {
        ...response2.data["userInfo"],
        userInfo: response3.data
      };
      // 将用户信息保存在store中
      userStore.saveToken(response2.data["token"]);
      userStore.saveUserInfo(userInfo);
    }
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