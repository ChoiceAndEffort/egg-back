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
    const haveData = await ctx.model.Users.findAll({ where: { name } });
    if (haveData && haveData.length) {
      ctx.body = {
        status: 20000,
        message: '添加的数据已经存在,请勿重复添加!',
      };
      return;
    }
    const res = await ctx.model.Users.create({ name, time, famous, logo });
    if (!res) {
      ctx.body = {
        status: 2000,
        message: '操作数据库失败',
      };
      return;
    }
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
    // 通过主键来查询一条记录
    const user = await ctx.model.Users.findByPk(id);
    if (!user) {
      ctx.body = {
        status: 404,
        message: '操作数据库失败',
      };
      return;
    }
    await user.destroy();
    ctx.body = {
      status: 200,
      message: '删除成功',
    };
  }

  // 修改
  async update() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const data = Object.assign({}, ctx.request.body);
    delete data.id;
    const user = await ctx.model.Users.findByPk(id);
    if (!user) {
      ctx.body = {
        status: 404,
        message: '操作数据库失败',
      };
      return;
    }
    await user.update(data);
    ctx.body = {
      status: 200,
      message: '修改成功',
    };
  }

}

module.exports = UserController;
