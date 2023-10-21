const { DataTypes } = require('sequelize');
const sequelize = require('../configs/_database');
const Order = require('./_order.model');

/* This code is defining a Sequelize model for the "User" table in a database. */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;
