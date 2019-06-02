/* eslint-disable*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};