'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;

  const Engineerings = app.model.define('engineerings', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    engineerName: STRING(50),

  }, {

    freezeTableName: true,

    timestamps: false,
  });
  //   多对多关联
  Engineerings.associate = function() {
    app.model.Engineerings.belongsToMany(app.model.EmperorInfo, {
      through: app.model.EmperorHasEngineering,
      foreignKey: 'engineeringsId',

    });
  };


  return Engineerings;
};
