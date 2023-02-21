<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
    <el-form-item label="" prop="username">
      <el-input
        placeholder="请输入用户名"
        autoComplete="on"
        style="position: relative"
        v-model="ruleForm.username"
        @keyup.enter.native="submitForm(ruleFormRef)"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><UserFilled /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input
        placeholder="请输入密码"
        autoComplete="on"
        @keyup.enter.native="submitForm(ruleFormRef)"
        v-model="ruleForm.password"
        :type="passwordType"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><GoodsFilled /></el-icon>
        </template>
        <template #suffix>
          <div class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </div>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        :loading="loading"
        class="login-btn"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import store from "@/store/index";
import { getTimeStateStr } from "@/utils/index";
const router = useRouter();
const { userStore } = store();
const ruleFormRef = ref<FormInstance>();
const passwordType = ref("password");
const loading = ref(false);

const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// // 表单数据
const ruleForm = reactive({
  username: "admin",
  password: "123456",
});

// // 显示密码图标
const showPwd = () => {
  passwordType.value = passwordType.value === "password" ? "" : "password";
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true;
      // 登录
      setTimeout(async () => {
        await userStore.login(ruleForm);
        await router.push({
          path: "/",
        });
        ElNotification({
          title: getTimeStateStr(),
          message: "欢迎登录 米闪闪渠道版",
          type: "success",
          duration: 3000,
        });
        loading.value = true;
      }, 1000);
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
$dark_gray: #889aa4;
::v-deep(.el-input__inner) {
  height: 40px;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
  height: 47px;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
  ::v-deep(.svg-icon) {
    vertical-align: 0;
  }
}
</style>
