// 加载Express模块
const express = require('express');

//加载MD5模块
const md5 = require('md5');

// 加载CORS模块
const cors = require('cors');

// 加载body-parser模块
const bodyParser = require('body-parser');

// 加载MySQL模块
const mysql = require('mysql');

// 创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host:'127.0.0.1',
  // 数据库服务器的端口号
  port:3306,
  // 数据库用户的用户名
  user:'root',
  // 数据库用户的密码
  password:'liuhanlin',
  // 数据库名称
  database:'dq',
  // 编码方式
  charset:'utf8',
  // 最大连接数
  connectionLimit:20
});

// 创建WEB服务器实例
const server = express();

// 解决跨域
server.use(cors({
  origin:['http://localhost:8080','http://127.0.0.1:8080',"http://192.168.0.109:8080"]
}));

//将bodyParser作为Server的中间件
server.use(bodyParser.urlencoded({
  extended:false
}));


// 托管
server.use( express.static('./public') );

// 分页
server.get('/fenye',(req,res)=>{
  //存储分页显示的记录数量
  let pagesize =parseInt(req.query.pagesize);
  // 获取地址栏中的page参数,该参数表示用户所在页码
  let page = parseInt(req.query.page);
   // 数据
   let offset = (page-1) * pagesize;
   // 以当前的cid为条件进行文章的查找操作
   sql = 'SELECT * FROM dq_sp LIMIT ?,?';
   // 执行SQL查询
   pool.query(sql,[offset,pagesize],(error,results)=>{
     if(error) throw error;
     res.send({message:'success',code:1,data:results});
   });
})



 // 获取轮播图信息
 server.get('/home',(req,res)=>{
  let sql="select * from dq_xq";
  // 执行SQL查询
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    //results代表的返回的结果集,为数组类型;同是在该数组中包含了一个
    //对象,该对象就是文章的详细信息,在使用时,无需返回数组可直接返回对象
    //所以results[0]代表的就是文章详细信息的对象
    //results此时的结果如 [{id:1,subject:'AA',nickname:'淘气的松鼠'}]
    res.send({message:'查询成功',code:1,data:results});
  });

});
// 获取商品信息
server.get('/sps',(req,res)=>{
  let sql="select * from dq_sp";
  // 执行SQL查询
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    //results代表的返回的结果集,为数组类型;同是在该数组中包含了一个
    //对象,该对象就是文章的详细信息,在使用时,无需返回数组可直接返回对象
    //所以results[0]代表的就是文章详细信息的对象
    //results此时的结果如 [{id:1,subject:'AA',nickname:'淘气的松鼠'}]
    res.send({message:'查询成功',code:1,data:results});
  });

});


// 获取详情页信息
server.get('/sp',(req,res)=>{
  let nid =  req.query.nid;
  let sql="select * from dq_sp where nid=?";
  // 执行SQL查询
  pool.query(sql,[nid],(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,articleInfo:results});
  });

});


// 购物车接口
server.get('/gwc',(req,res)=>{
  let fid=req.query.nid
  //查找用户是否存在
  let sql="select * from dq_gwc where nid=?";
  pool.query(sql,[fid],(error,results)=>{
    if(error) throw error;
    //如果用户不存在,则插入记录
    if(results== 1){
      sql = 'INSERT INTO dq_gwc(fid) VALUES(?)';
      pool.query(sql,[fid],(error,results)=>{
        if(error) throw error;
        res.send({message:'注册成功',code:1});
      })
    } else { //否则产生合理的错误提示
        res.send({message:'用户名已存在',code:0,data:results});
    }
  })
});







// 用户注册的接口
server.post('/register',(req,res)=>{
  //console.log(md5('12345678')) ;
  //获取用户名和密码
  let username = req.body.username;
  let password = req.body.password;
  //查找用户是否存在
  let sql = 'SELECT COUNT(uid) AS count FROM dq_dl WHERE username=?';
  pool.query(sql,[username],(error,results)=>{
    if(error) throw error;
    //如果用户不存在,则插入记录
    if(results[0].count == 0){
      sql = 'INSERT INTO dq_dl(username,password) VALUES(?,?)';
      pool.query(sql,[username,password],(error,results)=>{
        if(error) throw error;
        res.send({message:'注册成功',code:1});
      })
    } else { //否则产生合理的错误提示
        res.send({message:'用户名已存在',code:0,data:results});
    }
  })
});





//用户登录的接口
server.post('/login',(req,res)=>{
  //获取用户名和密码
  let username = req.body.username;
  let password = req.body.password;
  //以用户名和密码为条件进行查找
  let sql = 'SELECT * FROM dq_dl WHERE username=? AND password=?';
  pool.query(sql,[username,password],(error,results)=>{
    if(error) throw error;
    if(results.length == 0){
      res.send({message:'登录失败',code:0});
    } else {
      res.send({message:'登录成功',code:1,result:results[0]});
    }
   });

});




// 指定WEB服务器监听的端口
server.listen(3000);

