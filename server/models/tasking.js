'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasking = sequelize.define('tasking', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN
  }, {});
  tasking.associate = function(models) {
    // associations can be defined here
  };
  return tasking;
};