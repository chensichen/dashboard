const Mock = require("mockjs"); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = "http://mockjs.com/api"; // 定义默认域名，随便写
const code = 200; // 返回的状态码

// 随机生成文章数据
const postData = () => {
  // console.log(req) // 请求体，用于获取参数
  let posts = []; // 用于存放文章数据的数组
  for (let i = 0; i < 10; i++) {
    let post = {
      title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      icon: Random.dataImage("250x250", "文章icon"), // 随机生成大小为250x250的图片链接
      author: Random.cname(), // 随机生成名字
      date: Random.date() + " " + Random.time() // 随机生成年月日 + 时间
    };

    posts.push(post);
  }

  // 返回状态码和文章数据posts
  return {
    code,
    posts
  };
};
const listData = function() {
  let data = [];
  for (let i = 0; i < 20; i++) {
    let newList = {
      // 详细 规则 参照mockjs官网
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      imgSrc: Random.dataImage("200x160", "这是图片中的文本"), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
      author_name: Random.cname(), // Random.cname() 随机生成中文名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    data.push(newList);
  }
  return {
    code,
    data
  };
};
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/flex1Data`, "get", postData);
Mock.mock(`${domain}/flex2Data`, "get", listData);
