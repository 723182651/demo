import Vue from 'vue'
// 最新版轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment';
// 全局引入element插件
import ElementUI from 'element-ui'
// 全局引入element-ui插件
import 'element-ui/lib/theme-chalk/index.css'
// 全局引入懒加载模块
import VueLazyload from 'vue-lazyload'

//引入头尾全局组件
import Header from './components/Header.vue'
import Wei from './components/Wei.vue'
//导入MintUI的所有组件
import MintUI from 'mint-ui';

import Vuelazyload from 'vue-lazyload'
//导入MintUI的样式文件
import 'mint-ui/lib/style.min.css'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'






Vue.use(Vuelazyload, {

  loading: require('./assets/ionc/图片加载中.gif')

})

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.prototype.moment = moment;
Vue.config.productionTip = false
Vue.prototype.$qs = qs

Vue.component("MyHeader",Header);
Vue.component("MyWei",Wei);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
