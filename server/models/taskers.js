

module.exports = (sequelize, DataTypes) => {
  const taskers = sequelize.define('taskers', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN,
  }, {});
  taskers.associate = function (models) {
  };
  return taskers;
};
