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
  margin-top: 50px;
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
      <div class="title">立即登陆</div>
      <div class="forms">
        <el-input placeholder="请输六位账户" v-model="username" clearable :suffix-icon="state"></el-input>
        

        <el-input
          label="密码"
          placeholder="请输入密码"
          v-model="password"
          show-password
          autocomplete = "new-password"
        ></el-input>

        <span class="span">验证码</span>
        <div>
          <button type="primary" size="large" class="button" @click="handle">
            立即登录
          </button>
        </div>
        <span class="bot">还没有玛尼欧会员账号?
          <router-link to="./Register">请注册</router-link>
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
      state:""
    };
  },
  methods: {
    handle() {
      //分别获取用户名和密码
      let username = this.username;
      let password = this.password;
      //校验用户名
      let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (usernameReg.test(username)) {
       this.state="el-icon-success"
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$message({
          showClose: true,
          message: "用户名错误",
          type: "error",
          duration: 5000,
          offset: 180,
        });
        this.state="el-icon-error"
        //终止函数的执行
        return false;
      }
      //校验密码
      let passwordReg = /^[0-9A-Za-z\.\-_]{5,15}$/;
      if (passwordReg.test(password)) {
       
      } else {
        this.$message({
          showClose: true,
          message: "密码错误",
          type: "error",
          duration: 5000,
          offset: 180,
        });
      }

      let params = `username=${this.username}&password=${this.password}`;

      // 发送post请求
      this.axios.post("/login?", params).then((res) => {
        if (res.data.code == 0) {
         this.$message({
          showClose: true,
          message: "请先注册",
          type: "error",
          duration: 5000,
          offset: 180,
        });
        } else {
          console.log(res);
          // 修改islogin
          // commit提交表单
          // res.data.result存放的是当前登录成功的用户信息
          // 把该用户信息存入vuex
          this.$store.commit("loginOK",res.data.result)
          // 把用户信息存入sessionStorage
          // 转为JSON字符串
          let userString=JSON.stringify(res.data.result)
          // json字符串存入sessionStorage
          window.sessionStorage.setItem("user",userString)
          
            this.$router.push("/");
        
        }
      });
    },
  },
};
</script>
