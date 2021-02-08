'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  //  users是数据库的表名
  const Users = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(50),
    sex: STRING(4),
    age: STRING(32),
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Users;
};
