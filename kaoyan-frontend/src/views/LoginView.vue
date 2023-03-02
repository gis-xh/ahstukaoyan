<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      :label-position="labelPosition"
      class="login-form"
    >
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button class="login-button" type="primary" @click="submitForm">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const labelPosition = ref("right");

const loginForm = ref({
  username: "",
  password: "",
});

const rules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const submitForm = () => {
  // const form = ref.value;
  const form = ref.value;
  form.validate((valid) => {
    if (valid) {
      alert("登录成功！");
    } else {
      console.log("验证失败");
      return false;
    }
  });
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
}

.login-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  align-items: center;
}

.login-button {
  display: flex;
}
</style>
