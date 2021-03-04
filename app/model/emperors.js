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
    // 1个朝代-对应多个皇帝 1:n
  Emperors.associate = function() {
    app.model.Emperors.hasMany(app.model.EmperorInfo, {
      as: 'emperorInfo',
      foreignKey: 'dynasty_id', targetKey: 'id',
    });
  };
  return Emperors;
};
