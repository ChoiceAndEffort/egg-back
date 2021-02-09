'use strict';
// 处理和数据库的请求,返回对应的数据,先获取model某块下对应的数据,然后返回给页面

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 查询列表
  async index() {
    const { ctx } = this;
    const user = await ctx.model.Users.findAll();
    ctx.body = {
      status: 200,
      data: {
        list: user,
      },
    };
  }
  // 新增
  async create() {
    const { ctx } = this;
    //     如上面例子中的 ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。
    // 需要注意的是，获取 POST 的 body 应该使用 ctx.request.body，而不是 ctx.body。
    const { name, time, famous, logo } = ctx.request.body;
    const res = await ctx.model.Users.create({ name, time, famous, logo });
    console.log(res, 55555555);
    ctx.body = {
      status: 200,
      message: '新增数据成功',
    };
  }

  // 删除
  async delete() {
    const { ctx } = this;
    //     如上面例子中的 ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。
    // 需要注意的是，获取 POST 的 body 应该使用 ctx.request.body，而不是 ctx.body。
    const { id } = ctx.request.body;
    const user = await ctx.model.Users.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.destroy();
    ctx.body = {
      status: 200,
      message: '删除成功',
    };
  }
}

module.exports = UserController;
