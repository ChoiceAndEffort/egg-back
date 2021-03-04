'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const Emperors = app.model.define('emperors', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(50),
    emperor: STRING(40),
    time: STRING(32),
    city: STRING(100),
  }, {
    freezeTableName: true,
    timestamps: false,
  });
    // 分类表关联商品表 1:n
  Emperors.associate = function() {
    app.model.Emperors.hasMany(app.model.EmperorInfo, {
      as: 'emperorInfo',
      foreignKey: 'dynasty_id', targetKey: 'id',
    });
  };
  return Emperors;
};
