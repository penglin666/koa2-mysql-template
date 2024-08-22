"use strict";

const jwt = require("jsonwebtoken");
const config = require("../config");
const userServices = require("../services").user;
const { InvalidQueryError } = require("../lib/error");
const user = {
  async login(ctx, next) {
    const { user_name, password } = ctx.request.body;
    const result = await userServices.getUserInfo({ user_name, password });
    if (!user_name || !password) {
      throw new InvalidQueryError();
    }
    if (!result) {
      ctx.result = null;
      ctx.msg = "用户不存在或账号密码错误";
    } else {
      const { password, ...obj } = result;
      ctx.msg = "登录成功";
      ctx.result = jwt.sign(obj, config.secret, { expiresIn: "1d" });
    }

    return next();
  },
  async getUserInfo(ctx, next) {
    const result = await userServices.getUserInfoById(ctx.jwtData.id);
    ctx.msg = "获取成功";
    ctx.result = result;
    return next();
  },
};
module.exports = user;
