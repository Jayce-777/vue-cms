<template>
  <div class="panel-wrap">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登陆</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登陆</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox :checked="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="login-btn-wrap">
      <el-button type="primary" class="login-btn" @click="loginClick"
        >立即登陆</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(false);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();

    const loginClick = () => {
      console.log('登陆');
      accountRef.value?.loginAction();
    };

    return {
      isKeepPassword,
      loginClick,
      accountRef
    };
  }
});
</script>

<style scoped lang="less">
.panel-wrap {
  margin-bottom: 120px;
  width: 340px;

  .title {
    text-align: center;
  }
}

.account-control {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}

.login-btn-wrap {
  margin-top: 10px;
}

.login-btn {
  width: 100%;
}
</style>
