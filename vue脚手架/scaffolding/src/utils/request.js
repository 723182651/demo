 import axios from "axios"
// 创建一个axios的对象
const instance=axios.create({
    baseURL:"http://127.0.0.1:3000", //会在发送请求的时候拼接在url参数前面
    timeout:5000  //5秒算延迟
})
        // 全局请求拦截
        // 所有的网络请求都会先走这个方法
        // 我们可以在它里面添加一些自定义的内容
        
        // 全局响应拦截
        // 所有的网络请求返回数据之后都会先执行此方法
        // 可以根据服务器返回的不同的状态码,返回不同的页面
      


 export function get(url,params){
     return instance.get(url,{
         params
     });
 }

 export function post(url,data){
     return instance.post(url,data)
 }