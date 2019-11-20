<template>
  <div class="login-wrap">
    <div class="login-form">
      <div class="form-title">后台管理系统</div>
      <el-form
        ref="login"
        :model="param"
        :rules="rules"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input
            v-model="param.username"
            placeholder="username"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            type="password"
            placeholder="password"
            prefix-icon="el-icon-lock"
            @keyup.enter.native="submitForm()"
          />
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="primary"
            @click="submitForm()"
          >登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      param: {
        username: 'admin',
        password: '123123'
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/Login').then(() => {
            this.$message.success('登录成功')
            this.$router.push('/')
          }).catch(() => {

          })
        } else {
          this.$message.error('请输入账号和密码')
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #2d3a4b;
}
.form-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #707070;
  border-bottom: 1px solid #ddd;
}
.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #707070;
}
</style>
