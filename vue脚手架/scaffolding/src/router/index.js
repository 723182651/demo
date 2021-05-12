import Vue from 'vue'
import VueRouter from 'vue-router'

//项目实践
import Home from '../components/Home.vue'
import Article from '../components/Article.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Swiper from '../components/Swiper.vue';
import Seach from '../components/Seach.vue';
import Fenye from '../components/Fenye.vue';
import Sendinfo from '../components/Sendinfo.vue';
import { from } from 'core-js/fn/array';

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/seach',
    component:Seach
  },
  {
    path:'/sendinfo',
    component:Sendinfo
  },
  {
    path:'/swiper',
    component:Swiper
  },
  {
    path:'/fenye',
    component:Fenye
  },
  {
    path:'/article',
    component:Article
  },
  {
    path:'/register',
    component:Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

  //路由跳转后，页面回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router
