'use strict';

module.exports = app => {
  const {
    STRING,
    BIGINT,
  } = app.Sequelize;


  const EmperorInfo = app.model.define('emperorInfo', {
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
    app.model.EmperorInfo.belongsTo(app.model.Emperors, {
      // as: 'emperors',//指定别名
      foreignKey: 'dynasty_id', targetKey: 'id' });
  };

  return EmperorInfo;
};
