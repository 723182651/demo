<style scoped>
body,
p,
div {
  color: #7c7a7a;
  padding: 0;
  margin: 0;
  outline: none;
  display: block;
}
.content {
  width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.title {
  padding: 45px 0;
  font-size: 30px;
  text-align: center;
}
.mb30 {
  margin-bottom: 30px;
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  text-align: center;
}
p {
  margin-top: 20px;
}
.i-contact {
  padding: 20px 0;
}
.col-lg-7 {
  width: 58.33333333%;
  display: flex;
  justify-content: space-around;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.i-contact .item {
  width: 20%;
}
.i-contact .item .box {
  margin: 0 20px 0 18px;
  position: relative;
  line-height: 26px;
}
.row1 {
  margin-right: -15px;
  margin-left: -15px;
  border-bottom: 1px solid #d3d3d3;
  border-top: 1px solid #d3d3d3;
  display: flex;
}
.col{width: 41.66666667%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;}
.box{
  margin-left: -20px;
}
p img{
  width: 20px;
  height: 20px;
}
p a{
  color: #7c7a7a;
}
.col-md-5{
      width: 41.66666667%;
}
.box1{
      margin-left: -30px;
      display: flex;
}
.col-md-8 {
    width: 66.66666667%;
}

.col-md-4 {
    width: 33.33333333%;
}


.weibo{
  margin-right: 130px;
}
.box4{
  margin-left: 150px;
}
.col-xs-6{
  margin-left: 70px;
}
.tupian{
  border: 0px;
   width: 90px;
   margin-top: 15px;
   vertical-align: middle;
}
</style>
<template>
  <div class="content">
    <div class="row">
      <div class="title">更多服务</div>
    </div>
    <div class="row mb30">
      <div class="top">
        <div v-for="(item, index) in banner" :key="index">
          <a href=""
            ><img style="width:100%" :src="item.image" alt="" />
            <p>{{item.name}}</p></a
          >
        </div>
      </div>
    </div>

    <div class="i-comtact">
      <div class="content">
        <div class="row1">
          <div class="col-lg-7">

            <div class="item">
              <div class="box" v-for="(item, index) in text" :key="index">
               <p> <div class="col-black">{{ item.name }}</div></p>
              </div>
            </div>
             <div class="item">
              <div class="box" v-for="(item, index) in text" :key="index">
               <p> <div class="col-black">{{ item.name }}</div></p>
              </div>
            </div>
             <div class="item">
              <div class="box" v-for="(item, index) in text" :key="index">
               <p> <div class="col-black">{{ item.name }}</div></p>
              </div>
            </div>
             <div class="item">
              <div class="box" v-for="(item, index) in text" :key="index">
               <p> <div class="col-black">{{ item.name }}</div></p>
              </div>
            </div>
          </div>
              <div class="col">
                  <div class="box4">
                    <p><img src="../assets/ionc/qq.jpeg">
                    <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3209422353&amp;site=qq&amp;menu=yes" target="_blank"> 在线咨询</a>
                    </p>
                    <p>联 系 人：玛尼欧</p>
                    <p>邮 箱：3209422353@qq.com</p>
                    <p class="fn16 ">全国售后服务热线：4001839966</p>
                  </div>
              </div>
              <div class="col-md-5">
                <div class="box1">
                    <div class="col-xs-6 col-md-8 text-center ">
								<img class="tupian" src="../assets/ionc/二维码.jpg">
								<p class="erweima">官方微信二维码</p>
							</div>
              <div class="col-xs-6 col-md-4 text-center ">
								<div class="box3">
									<a href="http://weibo.com/malio2011?topnav=1&amp;wvr=6&amp;topsug=1" target="_blank"><img class="weibo" style="width:200%" src="../assets/ionc/微博.jpg">
									</a>
								</div>
							</div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        { image: require("../assets/ionc/service1.png"),name:"专属优惠" },
        { image: require("../assets/ionc/service2.png"),name:"门店查询" },
        { image: require("../assets/ionc/service3.png"),name:"为您服务"},
        { image: require("../assets/ionc/service4.png"),name:"在线商城" },
      ],
      text: [
        { name: "品牌文化" },
        { name: "品牌简介" },
        { name: "品牌资讯" },
        { name: "产品展示" },
      ],
    };
  },
};
</script>
