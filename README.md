# express-blog
一个极简的express博客

### 介绍
这是一个非常简洁的博客发布系统，基于express+mongodb搭建！主要有两个页面（首页和更新页），包含了发布博文、删除博文、更新博文和读取博文四个功能（即mongodb数据的增删改查）。

express的模板引擎用的ejs。

mongodb的在node.js的数据驱动用的是mongoose。

页面截图如下：

**首页**

![首页](https://joy-yi0905.github.io/express-blog/public/images/index.jpg) 

**更新页**

![更新页](https://joy-yi0905.github.io/express-blog/public/images/update.jpg) 

### 如何使用
1.首先下载项目     
2.打开命令行，建立数据库连接（底下的路径为下载项目的目录，数据存在data文件夹里，比如 E:\express-blog-master\data）
```javascript
> mongod.exe --dbpath 项目路径\data
```
3.在项目的目录中，再开一个命令行，输入如下命令，回车：
```javascript
> npm start
```
4.在浏览器中，打开 http://localhost:3000/ 
