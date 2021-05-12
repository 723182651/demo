<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.i-pro {
  background: #f1f1f1;
  margin-top: 10px;
}

.row {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.col {
  width: 33.33333333%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.lianjie {
  text-decoration: none;
  color: #7c7a7a;
  font-family: Arial, Helvetica, "microsoft yahei", sans-serif;
  outline: none;
  font-size: 14px;
}
.box {
  background: #fff;
  margin: 0 0 28px;
}
.top {
  position: relative;
}
.i-pro .top.cur .jiao {
  border-bottom: 40px solid #fff;
  border-top: 0;
  bottom: -40px;
  top: auto;
}
.text {
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 9;
}
.fn20 {
  font-size: 30px;
  font-weight: 600;
  display: block;
  color: red;
  line-height: 30px;
  margin: 10px auto;
}
em {
  width: 80px;
  height: 1px;
  background: #ff877d;
  margin: 5px auto 3px;
  display: block;
  font-style: normal;
}
p {
  height: 30px;
  overflow: hidden;
  line-height: 30px;
  margin: 0;
}

#Paginator {
  width: 1200px;
  display: flex;
}
#pageLimit {
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 4px;
}
ul {
  list-style: none;
}
.pagination > li {
  display: inline;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover,
.pagination > .active > span,
.pagination > .active > span:focus,
.pagination > .active > span:hover {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}

a {
  text-decoration: none;
  color: #7c7a7a;
  font-family: Arial, Helvetica, "microsoft yahei", sans-serif;
  outline: none;
  font-size: 14px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.el-pagination{
  margin: 0 auto;
  margin-bottom: 20px;
}
img{
  width: 100%;
  
}
</style>

<template>
  <div>
    <!-- 搜索框 -->
    <seach />
    <!-- 轮播图开始 -->
     
    
    <el-carousel trigger="click" height="700px">
      <el-carousel-item v-for="(item,index) in queryInfo" :key="index" >
       <img style="max-width:100%;max-heigth:100%" v-lazy="item.pic" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- 轮播图结束 -->
    <!-- 商品开始 -->
    <div class="i-pro">
      <div class="container">
        <div class="row">
          <!-- 商品框开始 -->
          <div class="col" v-for="(item, index) in userList" :key="index" @click="jumpPage(item.nid)">
            
              
              <div class="box">
                <div class="top">
                  <img v-lazy="item.pic" alt="" />
                  <!-- 动画三角形 -->
                  <i class="jiao trans_3 hidden-xs"></i>
                  <div class="text">
                    <el-button type="warning">查看详情</el-button>

                    <p>
                      {{ item.details }}
                    </p>
                  </div>
                </div>
              </div>
             
         
          </div>
          <!-- 商品框结束 -->
         
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[3, 6, 8, 9]" 
              :page-size="pagesize"    
              layout="total, sizes, prev, pager, next, jumper"
              :total="sp.length">  
          </el-pagination>
</div>
</div>
        </div>
      </div>
    </div>
    <!-- 商品结束 -->
  </div>
</template>
<script>
// // 轮播图组件导入
// import Swiper from "./Swiper";
// 搜索框组件导入
import Seach from "./Seach";
// 引入插件
import {get} from "../utils/request"
export default {
  components: { Seach,get },
  data() {
    return {
        to:'', 
       swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      queryInfo: [], //轮播图数据
      sp:[],  //商品数据
      page:1, //默认第一页
      pagesize:6,  //默认6条数据
      userList:[],  //接收商品分页数据
      total:null
    };
  },
     computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.handleUserList()
  },

  methods:{
    jumpPage(nid) {
      this.$router.push({
        path: '/Article',
         query: {
           nid:nid
         }
       })
    },
      handleSizeChange(val) {
      // 每次切换页面大小时,此方法响应，改变页面大小
        this.pagesize=val;
          console.log(`每页: ${val}条`);
          this.handleUserList()
      },
      handleCurrentChange(val) {
        // 每次切换当前页面时,此方法响应,改变当前页
        this.page=val
        console.log(`当前页: ${val}`);
        this.handleUserList()
      },
       handleUserList(){
          // 分页
    // 请求商品的数据
    let sql=`/fenye?page=${this.page}&pagesize=${this.pagesize}`
    get(sql).then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        this.userList = res.data.data;
        
 
      }
    });
      
    
       }
        },
     
  mounted() {
    // 请求得到首页的数据
    get("/home").then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        // 把后台传递的数据给querInfo
        this.queryInfo = res.data.data;
    
      }
    });
      
    // 请求商品的数据
    get("/sps").then((res) => {
      if (res.data.code == 0) {
        console.log("大哥报错了");
      } else {
        this.sp = res.data.data;
  
      }
    });
   
  

    
        
      

  },
  
  
};
</script>
