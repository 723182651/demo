<template>
<div class="containe" style="background-color: #f1f1f1;color:#000;heigth:100px">
 
  <div v-if="this.$store.state.islogin==0" slot="right" class="shorcut"> 
 <router-link to="./Login">登录</router-link>
  <router-link to="./Register">免费注册</router-link>
  </div>
  <div v-else slot="left" class="shorcut" style="margin-left:100px;font-size:18px">
   欢迎,<router-link style="color:red;font-size:15px;margin-left:10px" to="/">{{this.$store.state.user.username}}</router-link>
    <router-link to="./fenye" style="margin-left:50px">购物车</router-link></div>
  
</mt-header>
</div>
</template>
    <style>
    
    .mint-header-title{margin-left: 1000px;}
    .mint-button-text{margin-left: 100px;}
    .is-right{margin-right: 250px;}
    </style>
<script>
  export default {
    data(){
      return{
        
      }
    },
   created(){
            this.a = this.$store.state.x;
            console.log(this.a)
        },
    methods: {
      
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
<style scoped>
.shorcut{
  height: 30px;
  line-height: 30px;
}
</style>