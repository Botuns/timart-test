const { DataTypes } = require('sequelize');
const sequelize = require('../configs/_database');

/* This code is defining a Sequelize model for an "Order" table in a database. */
const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_date: {
    type: DataTypes.DATE,
  },
  total_amount: {
    type: DataTypes.DECIMAL,
  },
});

module.exports = Order;
