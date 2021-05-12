import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 或者islogin:windowsessionStorage.getItem('userInfo') ? 1 :0,
 islogin:sessionStorage.getItem('user') ? 1:0,
//  有数据返回数据没有返回空对象
 user:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')):{},
  //    // 保存当前登录用户
  // userInfo:JSON.parse(sessionStorage.getItem('userInfo')),
  // // 当前登录用户
  // islogin:sessionStorage.getItem('userInfo') ? 1 :0
  },
  mutations: {
    // 修改登录状态
    // payload即使登录成功后返回的当前用户详细信息
    loginOK(state,payload){
      state.islogin=1
      state.user=payload
    }
  },
  actions: {
  },
  modules: {

  }
})
