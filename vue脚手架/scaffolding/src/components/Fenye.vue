<style scoped>
.row{margin-top: 50px;}
.contain{
  width: 1200px;
  margin:0 auto;
  
}
.hd{margin: 0;
    padding: 0 20px;
    list-style: none;
    background-color: #ebebeb;
    height: 50px;
    line-height: 50px;
    }
.title{
    list-style: none;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    justify-content: space-around;
  
}

.bd{
padding: 0 20px;
border: 1px solid #f8f8f8; 
position: relative;
}


</style>
<template>
  <div class="row">
      <div class="yc" v-if="">
          <p>购物车空空如也</p>

      </div v-else>
  <div class="contain">
      <div class="hd">
        <ul class="title">
          <li class="li_1">商品名称</li>
          <li >市场价</li>
          <li >数量</li>
          <li >操作</li>
        </ul>
   

        <ul class="title" v-for="(item,index) of queryInfo" :key="index">
          <li class="li_1">
             <el-checkbox v-model="checked">{{item.title}}</el-checkbox>
          </li>
          <li >¥{{item.price}}</li>
          <li >1</li>
          <li >删除</li>
        </ul>
   </div>
  
  </div></div>
</template>
<script>
export default {
  data(){
    return{
      queryInfo:[],
       checked: true
    }
  },
  mounted(){
    // 请求得到首页的数据
  this.axios.get('/guc').then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        // 把后台传递的数据给querInfo
        this.queryInfo = res.data.data;
        console.log(this.queryInfo);
      }
    });
  }
}
</script>