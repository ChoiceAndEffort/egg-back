'use strict';


const Controller = require('egg').Controller;

class EngineeringsController extends Controller {
  // 查询列表
  async index() {
    const { ctx } = this;
    // 获取get请求的数据,通过query的方式获取数据
    const { page = 1, pageSize = 20 } = ctx.query;
    // 分页查询
    const data = await ctx.model.EmperorInfo.findAndCountAll({
      offset: parseInt((page - 1) * pageSize),
      limit: parseInt(pageSize),
      include: {
        model: ctx.model.EmperorHasEngineering,

      },
      distinct: true,
    });
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: {
        list: data.rows,
        total: data.count,
      },
    };
  }
}

module.exports = EngineeringsController;
