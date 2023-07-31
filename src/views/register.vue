<template>
  <div class="register">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">注册</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <el-form :model="form" label-width="120px" style="width: 100%;">
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button class="register-btn" type="primary" @click="onSubmit">注册</el-button>
          <el-link type="primary">已注册，直接登录!</el-link>
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
  nickname: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped lang="scss">
.register {
  width: 100%;
  margin: 10px 0 20px 0;

  .box-card {
    width: 70%;
    margin-left: 200px;

    .title{
      font-size: 22px;
      font-weight: 600;
    }
  }

  .register-btn {
    margin-right: 10px;
  }
}
</style>