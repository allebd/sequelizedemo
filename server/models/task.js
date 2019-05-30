'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    // associations can be defined here
    task.belongsTo(models.Customer);
  };
  return task;
};