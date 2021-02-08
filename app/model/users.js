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
    famous: STRING(40),
    time: STRING(32),
    logo: STRING(100),
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Users;
};
