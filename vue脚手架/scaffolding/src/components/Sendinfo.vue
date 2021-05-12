<style scoped>
.oreder{
    border-top: 1px solid #E9ECF0;
    background: #f3f5f7;
    padding-top: 24px;
    padding-bottom: 100px;
}
.container{
       background: #ffffff;
    border-radius: 8px;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 1200px;
    overflow: hidden;
    padding: 30px;
    
}
.top{
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 1000;
}
.price{
    font-size: 20px;
    color: red;
    font-weight: 600;
}
.el-form{margin-top:30px ;}
.el-input__inner{width: 300px;}
</style>
<template>
  <div class="oreder">
      <div class="container">
          <span class="top">收货人信息</span>
          <el-form ref="form" :model="form" label-width="80px">
  </el-form-item>

<el-form-item label="收货人">
  <el-input
  placeholder="收货人姓名"
  v-model="input"
  clearable
  style="width:300px">
</el-input>
</el-form-item>

<el-form-item label="手机号码">
  <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable
  style="width:300px">
</el-input>
</el-form-item>
 <el-form-item label="地址">
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
  </el-form-item>
<el-form-item label="详细地址">
  <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable
  style="width:300px">
</el-input>
</el-form-item>
 
  
 
  <el-form-item label="留言">
    <el-input type="textarea" v-model="form.desc" style="width:500px"></el-input>
  </el-form-item>
  <el-form-item label="应付"><div class="price">¥价格</div></el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即付款</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
             form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          input: ''
        }
        }
    }
}
</script>