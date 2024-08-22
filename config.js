"use strict";

const path = require("path");

module.exports = {
  port: "3333",
  secret: "secret",
  publicDir: path.resolve(__dirname, "./public"),
  logPath: path.resolve(__dirname, "./logs/koa-template.log"),
  mysql: {
    host: "127.0.0.1", // 数据库的地址
    user: "root", // 数据库用户名
    password: "123456", // 数据库密码
    port: "3306", // mysql数据库的端口号
    database: "bill" // 使用那个数据库
  },
};
