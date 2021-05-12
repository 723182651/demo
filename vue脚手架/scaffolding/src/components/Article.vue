<style lang="scss" scoped>
    .top{
        width: 1200px;
        margin: 30px auto;
        
        
    }
    .ft{display: flex;}
    .header{
        display: flex;
    }
    .left{
        margin: 50px;
        
    }
    .right{
        margin: 50px;
        width: 45%;
    }
    .index{
        margin-left:120px;
        font-size: 40px;
        padding: 30px;
        
        
    }
    .title{
        font-size: 20px;
        font-weight: 1000px;
        
        margin-left: 12px;
    }
    .title_name{
        display: flex;
        margin-top: 20px;
        margin-left: 10px;
    }
    .peisong{
        color: #a6a3a6;
        margin-right: 80px;
    }
    .quanguo{
        color: #5c5a5a;
    }
    .button{
        margin-top: 30px;
        display: flex;
      
    }
.price.active {
    background-color: #FF5147;
    background: linear-gradient(90deg, #FF734D 0%, #FF5147 100%);
    position: relative;
    padding: 12px 0;
    border-radius: 0px 0px 8px 8px;
    display: flex;
}
.price-item{
    display: inline-block;
    width: 80px;
    color: #e8e8e8;
    padding-left: 12px;
    font-size: 18px;
    line-height: 30px;
}
.price{
    display: inline-block;
    font-size: 30px;
    color: #e8e8e8;
    font-weight: bold;
}
.sale{
    position: absolute;
    top: 24px;
    right: 18px;
    line-height: 18px;
    font-size: 12px;
    
}
.yinying{
    background: #e8e8e8;
    border-radius: 8px 8px 0px 0px;
   
}
.xinghao{
    margin-top: 30px;
    margin-bottom: 50px;
    color: #a6a3a6;
}
.big{
    
    height: 350px;
}
.my_photo{
    display: flex;  
    justify-content: space-around
}
.photo{
    box-sizing: border-box;
    width: 100px;
    height: 80px;
    border: 1px solid #FF5147;
    background: red;
    display: inline;
    margin-top: 8px;

}

  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 450px;
    margin: 0;
   
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
    
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
     
  }
  .utceng{height: 350px;}
 .swiper-slide {
    background-size: cover;
    background-position: center;
   
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
    
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    


  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
    margin-top:30px
   
   
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
    
  }
  .swiper-wrapper{
      margin-right: 300px;
  }
</style>
<template>
        <!-- 面包屑 -->
    <div class="top" >
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品</el-breadcrumb-item>
  <el-breadcrumb-item>商品详情</el-breadcrumb-item>
</el-breadcrumb>
        <!-- 面包屑结束 -->
      <div class="ft">
        <div class="header" >
              
            <div class="left">
              <div class="swiper-box" style="height: 450px;width: 540px;">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1" v-for="(item,index) in queryInfo" :key="index">
          <img style="width:100%;height:100%" v-lazy="item.pic" alt="" />
        </swiper-slide>
        
       
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"  v-for="(item,index) in queryInfo" :key="index">
          <img class="img1" style="width: 100%" v-lazy="item.pic" alt="" />
        </swiper-slide>
       
      </swiper>
  </div>   
  </div>
               
            </div>
            
            <!-- 右边商品开始 -->
            <div class="right" v-for="(item,index) of queryInfo" :key="index">
                <div class="yinying">
               <p class="index">{{item.title}}</p>
                    
                <span class="title">{{item.details}}</span>
                <div class="title_name">
                    <div class="peisong">全国配送</div>
                    <div class="quanguo">小城市提前预约工人师傅</div>
                </div>
                 <div class="title_name">
                    <div class="peisong">产品材料</div>
                    <div class="quanguo">{{123}}</div>
                </div>
                 <div class="title_name">
                    <div class="peisong">产品服务</div>
                    <div class="quanguo">7天无条件退换,全年保修</div>
                </div>
                <div class="title_name">
                    <div class="xinghao">型号选择</div>
                    <!-- 商品小图片开始 -->
                    <div><img src="" alt=""></div>
                    <div><img src="" alt=""></div>
                    </div>
                    </div>
                    <!-- 商品小图片结束 -->
                    <div class="price active">
                    <div class="price-item">售价</div>
                    <div class="price">¥{{item.price}}</div>
                    <div class="sale">已售1.87万件</div>
                </div>
                <!-- 按钮开始 -->
                    <div class="button">
                     <div @click="jumpPage(item.nid)">
                      <el-button type="warning" round style="width:200px; height:50px; margin-right: 100px;" @click="gwc">加入购物车</el-button></div>
                    <router-link to="/sendinfo"><el-button type="danger" round style="width:200px;height:50px;">立即付款</el-button></router-link>
                    </div>
                <!-- 按钮结束 -->
                </div>
         
            
            <!-- 商品结束 -->
        </div>
        </div>
</div>
</template>
<script>
export default {
 
  data() {
    return {

        queryInfo:'',
        swiperOptionTop: {
            loop: true,
         
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    methods:{
     gwc(){
        let gwc=`http://127.0.0.1:3000/gwc?nid=${this.$route.query.nid}`
        console.log(gwc)
      this.axios.get(gwc).then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        // 把后台传递的数据给querInfo
        this.queryInfo = res.data.articleInfo;
        console.log(this.queryInfo);
      }
    });
     }
      
      },
   mounted() {
    
       this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
   /*商品轮播结束*/
    // 请求得到首页的数据
     let sq=`http://127.0.0.1:3000/sp?nid=${this.$route.query.nid}`
    this.axios.get(sq).then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        // 把后台传递的数据给querInfo
        this.queryInfo = res.data.articleInfo;
        // console.log(this.queryInfo);
      }
    });
   },
  }
</script>