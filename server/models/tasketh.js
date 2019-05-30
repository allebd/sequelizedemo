'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasketh = sequelize.define('tasketh', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN
  }, {});
  tasketh.associate = function(models) {
    // associations can be defined here
  };
  return tasketh;
};