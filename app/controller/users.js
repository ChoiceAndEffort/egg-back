'use strict';
// 处理和数据库的请求,返回对应的数据,先获取model某块下对应的数据,然后返回给页面

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.model.Users.findAll();
    ctx.body = user;
  }
}

module.exports = UserController;
