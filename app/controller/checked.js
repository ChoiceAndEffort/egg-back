'use strict';
// 处理和数据库的请求,返回对应的数据,先获取model某块下对应的数据,然后返回给页面

const Controller = require('egg').Controller;

class CheckedController extends Controller {
  // 查询列表
  async index() {
    const { ctx } = this;
    const configs = await ctx.model.Checked.findAll();// 查询tab配置
    const infomation = await ctx.model.Info.findOne();// 查询名人配置
    const imagesUrls = await ctx.model.Images.findAll();// 查询头部动画图片
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: {
        configs,
        infomation,
        imagesUrls,
      },

    };
  }
  // 修改
  async update() {
    const { ctx } = this;
    const data = ctx.request.body;
    data.forEach((item, index) => {
      item.id = index + 1;
      if (item.checked) {
        item.checked = 1;
      } else {
        item.checked = 0;
      }

    });
    // sequelize 循环插入数据
    const checkedData = await ctx.model.Checked.bulkCreate(data, {
      updateOnDuplicate: [ 'label', 'checked', 'type' ], // 注意 updateOnDuplicate是在插入的时候如果主键冲突就执行更新操作
      ignoreDuplicates: true, // 是忽略重复数据的
    });
    if (checkedData) {
      ctx.status = 200;
      ctx.body = {
        code: 200,
        data: checkedData,
        message: '更新配置成功!',
      };
      return;
    }
    ctx.status = 500;
    ctx.body = {
      data: {},
      message: '更新配置失败',
    };


  }

}

module.exports = CheckedController;
