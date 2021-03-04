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
    freezeTableName: true,
    timestamps: false,
  });
  return Images;
};
