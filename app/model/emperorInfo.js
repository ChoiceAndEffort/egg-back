'use strict';

module.exports = app => {
  const {
    STRING,
    BIGINT,
  } = app.Sequelize;


  const EmperorInfo = app.model.define('emperor_info', {
    id: {
      type: BIGINT,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    posthumousTitle: {
      type: STRING,
      allowNull: false,
    },
    start_time: {
      type: STRING,
      allowNull: false,
    },
    endTime: {
      type: STRING,
      allowNull: false,
    },
    address: {
      type: STRING,
      allowNull: false,
    },

  }, {
    // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    freezeTableName: true,
    // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
    timestamps: false,
  });
  // 商品表从属分类 n-1
  EmperorInfo.associate = function() {
    // 我们在 app/model/ 目录下编写 emperor_info 这个 Model,
    // 就可以在 Controller 和 Service 中通过 app.model.User 或者 ctx.model.User 访问到了
    app.model.EmperorInfo.belongsTo(app.model.Emperors, {
      as: 'emperors', // 指定别名
      foreignKey: 'dynasty_id', targetKey: 'id' });
  };

  return EmperorInfo;
};
