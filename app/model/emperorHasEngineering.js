'use strict';
// 用于多对多表查询的关联,这个表是皇帝和工程的关联表,
module.exports = app => {
  const {
    STRING,
    BIGINT,
  } = app.Sequelize;

  const EmperorHasEngineering = app.model.define('emperor_has_engineering', {
    engineeringsName: STRING(50),
    emperorName: STRING(50),
    engineeringsId: {
      type: BIGINT,
      primaryKey: true,
    },
    emperorId: {
      type: BIGINT,
      primaryKey: true,
    },

  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return EmperorHasEngineering;
};
