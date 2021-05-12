<style scoped>
.top {
  position: relative;
  height: 800px;
  background: url("../assets/ionc/MALIO一体化主画面4 (2).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.loginbox {
  position: absolute;
  width: 660px;
  height: 600px;
  padding: 20px;
  top: 50px;
  left: 60%;
  background-color: #c8a7a7;
}
.title {
  text-align: center;
  font-size: 20px;
  padding: 30px 0;
  border-bottom: 1px solid #e6e6e6;
   color: #666;
  font-weight: 1000;
}
.forms {
  width: 390px;
  margin: 0 auto;
  margin-top: 30px;
}
.input {
  width: 390px;
  height: 50px;
  background-color: #fd9890;
  border: none;
  border-radius: 3px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 10px;
}
.button {
  width: 390px;
  height: 40px;
  background-color: #409eff;
  border: none;
  border-radius: 3px;
  color: #ccc;
}
.bot {
  display: block;
  width: 390px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ccc;
  margin-top: 50px;
}
.span {
  padding-top: 25px;
}
a {
  font-size: 16px;
  font-weight: 1000;
}
.el-input {
  margin-bottom: 30px;
}
</style>

<template>
  <div class="top">
    <div class="loginbox">
      <div class="title">免费注册</div>
      <div class="forms">
        <el-input placeholder="请输六位账户" v-model="username" clearable>
        </el-input>

        <el-input
          placeholder="请输入八位数密码"
          v-model="password"
          show-password
        ></el-input>

        <el-input
          placeholder="请输入八位数密码"
          v-model="resword"
          show-password
      autocomplete = "new-password"

        ></el-input>

        <div>
          <button type="primary" size="large" class="button" @click="handle">
            立即登陆
          </button>
        </div>
        <span class="bot"
          >已有玛尼欧会员账号
          <router-link to="./Login">立即登录</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      resword: "",
      message: "",
    };
  },

  methods: {
    handle() {
      //分别获取出用户名、密码及确认密码
      let username = this.username;
      let password = this.password;
      let resword = this.resword;

      //校验用户名
      let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (usernameReg.test(username)) {
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)

        //终止函数的执行
        return false;
      }
      //校验密码
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if (passwordReg.test(password)) {
      } else {
        this.$message({
          showClose: true,
          message: "用户名错误",
          type: "error",
          duration: 5000,
          offset: 180,
        });
        return false;
      }
      //校验两次密码是否一致
      if (password == resword) {
      } else {
        this.$message({
          showClose: true,
          message: "密码不一致",
          type: "error",
          offset: 200,
        });
        return false;
      }

      // 发送get请求
      let params = `username=${this.username}&password=${this.password}`;
      this.axios.post("/register?", params).then((res) => {
        if (res.data.code == 0) {
          this.$message({
            showClose: true,
            message: "账号已被注册",
            type: "error",
            offset: 240,
          });
        } else {
          this.$message({
            showClose: true,
            message: "正在登录页面跳转中",
            type: "sucess",
            duration: 5000,
            offset: 180,
          });
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
