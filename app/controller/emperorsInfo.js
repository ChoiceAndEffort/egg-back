'use strict';
// 处理和数据库的请求,返回对应的数据,先获取model某块下对应的数据,然后返回给页面

const Controller = require('egg').Controller;

class EmperorInfoController extends Controller {
  // 查询列表
  async index() {
    const { ctx } = this;
    // 获取get请求的数据,通过query的方式获取数据
    const { page = 1, pageSize = 20 } = ctx.query;
    // 分页查询
    const data = await ctx.model.EmperorInfo.findAndCountAll({
      offset: parseInt((page - 1) * pageSize),
      limit: parseInt(pageSize),
      include: [
        {
          model: ctx.model.Emperors,
          as: 'emperors', // 指定表的别名-可以注释掉-注释掉的时候需要同步注释掉emperorInfo表和emperors表中as定义的别名
          // attributes: [ 'id', 'name' ],//可以用来指定取对应的字段
        },
      ],
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

module.exports = EmperorInfoController;
