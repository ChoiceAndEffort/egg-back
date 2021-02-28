'use strict';

module.exports = app => {
  const {
    STRING, // 将字段指定为变长字符串类型。默认长度为 255
    INTEGER, // 整型,为数据类型指定长度时，可以像函数一样引用：INTEGER(2)
  } = app.Sequelize;

  //  users是数据库的表名
  const Emperors = app.model.define('emperors', {
    id: {
      type: INTEGER,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    name: STRING(50),
    emperor: STRING(40),
    time: STRING(32),
    city: STRING(100),
  }, {
    // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    freezeTableName: true,
    // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
    timestamps: false,
  });
  // 分类表关联商品表 1:n
  Emperors.associate = function() {
    app.model.Emperors.hasMany(app.model.EmperorInfo, {
      as: 'emperorInfo',
      foreignKey: 'dynasty_id', targetKey: 'id' });
  };
  return Emperors;
};
