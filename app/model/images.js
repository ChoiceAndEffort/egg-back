'use strict';

module.exports = app => {
  const {
    STRING,
    BIGINT,
  } = app.Sequelize;


  const Images = app.model.define('images', {
    id: {
      type: BIGINT,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    name: STRING,
    url: STRING,

  }, {
    // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    freezeTableName: true,
    // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
    timestamps: false,
  });
  return Images;
};
