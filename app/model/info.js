'use strict';

module.exports = app => {
  const {
    TEXT,
    STRING,
    BIGINT,
  } = app.Sequelize;


  const Info = app.model.define('info', {
    id: {
      type: BIGINT,
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    name: STRING,
    info: TEXT,

  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Info;
};
