SET NAMES UTF8;
DROP DATABASE IF EXISTS dq;
CREATE DATABASE dq CHARSET=UTF8;
USE dq;

    -- 登录注册表
  CREATE TABLE dq_dl(
uid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32),
  password VARCHAR(32)

  );
  INSERT INTO dq_dl VALUES
  (null,'张三','1234567'),
  (null,'李四','1234567');


--    -- 商品详情
  CREATE TABLE dq_xq(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,1)
);
INSERT INTO dq_xq VALUES

(null,"轮播图","轮播图第一张","http://127.0.0.1:3000/ionc/3%20(2).jpg","4432.00"),
(null,"轮播图","轮播图第二张","http://127.0.0.1:3000/ionc/%E5%86%B0%E7%AE%B1banner.jpg","2856.00"),
(null,"轮播图","轮播图第三张","http://127.0.0.1:3000/ionc/%E9%9B%86%E6%88%90%E7%81%B6banner%20(1).jpg","3364.00"),
(null,"轮播图","轮播图第四张","http://127.0.0.1:3000/ionc/MALIO%E4%B8%80%E4%BD%93%E5%8C%96%E4%B8%BB%E7%94%BB%E9%9D%A24%20(2).jpg","4432.00");

   -- 商品详情
  CREATE TABLE dq_sp(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2)
);
INSERT INTO dq_sp VALUES
(null,'T908','囿于昼夜与厨房，唯爱与美食不可辜负','http://127.0.0.1:3000/ionc/%E7%94%B5%E7%A3%81%E7%82%89.jpg','2995.00'),
(null,'7811G.2G','MALIO玛尼欧，智能家电定制专家','http://127.0.0.1:3000/ionc/%E5%90%B8%E6%B2%B9%E7%83%9F%E6%9C%BA.jpg','598.00'),
(null,'V10FP','以客为先，服务至上第3级后置活性炭','http://127.0.0.1:3000/ionc/%E7%83%A4%E7%AE%B1.jpg','3815.00'),
(null,'SS612P',' 买蒸烤送净水器，保障用水健康','http://127.0.0.1:3000/ionc/%E5%9E%83%E5%9C%BE%E5%A4%84%E7%90%86%E5%99%A8.jpg','2658.00'),
(null,'D08','MALIO致力于打造更适合中国家庭的智能家电','http://127.0.0.1:3000/ionc/%E5%86%B0%E7%AE%B1.jpeg','6856.00'),
(null,'M01','两级滤芯四层过滤，净水直饮更健康','http://127.0.0.1:3000/ionc/%E6%B4%97%E7%A2%97%E6%9C%BA.jpg','6450.00'),
(null,'WRO07-400','厨柜+厨电一体化，厨房美学创造者MALIO致力于打造更适合中国家庭的智能家电','http://127.0.0.1:3000/ionc/%E6%B6%88%E6%AF%92%E6%9F%9C.jpg','6450.00'),
(null,'DW605','大容量提升生活幸福感','http://127.0.0.1:3000/ionc/%E5%87%80%E6%B0%B4%E5%99%A8.jpg','6450.00'),
(null,'R02-R03','瀑布风冷360°循环系统，不结霜','http://127.0.0.1:3000/ionc/%E5%BE%AE%E6%B3%A2%E7%82%89.jpeg','6450.00');

/**收货地址信息**/
CREATE TABLE dq_dz(
  aid INT PRIMARY KEY AUTO_INCREMENT,             
  receiver VARCHAR(16),      
  cellphone VARCHAR(16),     
  province VARCHAR(16),      
  city VARCHAR(16),           
  county VARCHAR(16),         
  address VARCHAR(128)
);
INSERT INTO dq_dz VALUES
(1,'张三','1338826015','江苏省','南京市','群县','街区三栋');


/**购物车条目**/
CREATE TABLE dq_gwc(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2)
);

