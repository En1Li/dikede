<template>
  <div class="login_bgi">
    <div class="login_formbox">
      <div class="logo_img">
        <img src="../../assets/login_imgs/logo.png" alt="">
      </div>
      <div class="login_form">
        <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
          <el-form-item prop="zhanghao">
            <el-input
              v-model="input1"
              placeholder="请输入账号"
              prefix-icon="el-icon-mobile-phone"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="input2"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              suffix-icon="el-icon-view"
            />
          </el-form-item>
          <el-form-item prop="yanzheng">
            <el-input
              v-model="input3"
              placeholder="请输入验证码"
              prefix-icon="el-icon-search"
            >
              <template #append>
                <img src="https://likede2-java.itheima.net/api/user-service/user/imageCode/ykG3sIuxuFsGIDLDuxJGY5seqyprvXyq" alt="">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入验证码'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        zhanghao: '',
        password: '',
        yanzheng: ''
      },
      input1: '',
      input2: '',
      input3: '',
      rules: {
        zhanghao: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        yanzheng: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<style scoped lang='less'>
.login_bgi{
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/login_imgs/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  .login_formbox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 518px;
    height: 388px;
    padding: 76px 35px 0;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    .logo_img{
      position: absolute;
      top: -46px;
      left: 42%;
      img{
        width: 96px;
        height: 96px;
      }
    }
    .el-button--primary{
      width: 100%;
      height: 50px;
      background: linear-gradient(262deg,#2e50e1,#6878f0);
    }

  }
  .login_form{
    /deep/.el-input__inner{
      height: 50px;
    }
    /deep/.el-input-group__append{
      padding: 0;
    }
  }

}
</style>
