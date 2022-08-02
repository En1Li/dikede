<template>
  <div class="login_bgi">
    <div class="login_formbox">
      <div class="logo_img">
        <img src="../../assets/login_imgs/logo.png" alt="" />
      </div>
      <div class="login_form">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item prop="zhanghao">
            <el-input
              v-model="ruleForm.zhanghao"
              placeholder="请输入账号"
              prefix-icon="el-icon-mobile-phone"
              @keyup.enter.native="submitForm('ruleForm')"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              :show-password="true"
              @keyup.enter.native="submitForm('ruleForm')"
            />
          </el-form-item>
          <el-form-item prop="yanzheng">
            <el-input
              v-model="ruleForm.yanzheng"
              placeholder="请输入验证码"
              prefix-icon="el-icon-search"
              @keyup.enter.native="submitForm('ruleForm')"
            >
              <template #append>
                <img :src="yanzheng" @click="getCheckFn" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              :loading="loadingbtn"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: usermapState, mapActions: usermapActions } =
  createNamespacedHelpers("user");
export default {
  data() {
    return {
      ruleForm: {
        zhanghao: "admin",
        password: "admin",
        yanzheng: "",
      },
      rules: {
        zhanghao: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        yanzheng: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      code: "",
      loadingbtn: false,
    };
  },
  created() {
    this.getCheckFn();
  },
  methods: {
    ...usermapActions(["getCheck", "getloginInfo"]),

    // 点击登录
    async submitForm(formName) {
      this.loadingbtn = true;
      await this.$refs[formName].validate();
      await this.getloginInfo({
        loginName: this.ruleForm.zhanghao,
        password: this.ruleForm.password,
        code: this.ruleForm.yanzheng,
        clientToken: this.code,
        loginType: 0,
      });
      this.loadingbtn = false;
    },

    // 点击更换验证码
    getCheckFn() {
      const len = 32;
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      const maxPos = chars.length;
      let character = "";
      for (let i = 0; i < len; i++) {
        character += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      this.code = character;
      this.getCheck(this.code);
    },
  },

  computed: {
    ...usermapState(["yanzheng"]),
  },
};
</script>

<style scoped lang="less">
.login_bgi {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login_imgs/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  .login_formbox {
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
    .logo_img {
      position: absolute;
      top: -46px;
      left: 42%;
      img {
        width: 96px;
        height: 96px;
      }
    }
    .el-button--primary {
      width: 100%;
      height: 50px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
    }
  }
  .login_form {
    /deep/.el-input__inner {
      height: 50px;
    }
    /deep/.el-input-group__append {
      padding: 0;
    }
    /deep/.el-input-group__append {
      border: 0;
    }
  }
}
</style>
