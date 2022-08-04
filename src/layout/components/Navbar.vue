<template>
  <div class="top">
    <!-- LOGO -->
    <div class="navbar-login">
      <img src="@/assets/login_imgs/toplogo.png" />
    </div>
    <!-- LOGO -->

    <!-- 内容 -->
    <div class="navbar-user">
      <!-- 头像 -->
      <div class="navbar-userImg">
        <img :src="userInfo.image+'123'" v-defauleImg="defauleImg" />
      </div>
      <!-- 头像 -->

      <!-- 信息 -->
      <span>欢迎您, {{ $store.state.user.userInfo.loginName }}</span>
      <!-- 信息 -->

      <!-- 退出 -->
      <el-dropdown
        class="avatar-container"
        trigger="click"
        @click.native="logout"
      >
        <div class="avatar-wrapper" @click='logout'>
          退出
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
      <!-- 退出 -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import defauleImg from "@/assets/login_imgs/people.png";
const { mapState: usermapState } = createNamespacedHelpers("user");

export default {
  data() {
    return {
      defauleImg: defauleImg,
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...usermapState(["userInfo"]),
  },
  methods: {
    async logout(){
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding-right: 50px;
  background-size: 100%;
  z-index: 999999;
  overflow: hidden;
  position: relative;
  // background: rgb(240, 55, 55);
  background: url(~@/assets/login_imgs/top.png) no-repeat;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .navbar-login {
    width: 88px;
    height: 36px;
    margin-top: 10px;
    margin-left: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  // 信息
  .navbar-user {
    display: flex;
    align-items: center;
    width: 200px;
    .navbar-userImg {
      margin-right: 20px;
    }
    span {
      white-space: nowrap;
      color: #fff;
      font-size: 16px;
      margin-right: 20px;
    }
    .avatar-container {
      margin-right: 20px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      .avatar-wrapper {
        white-space: nowrap;
      }
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
