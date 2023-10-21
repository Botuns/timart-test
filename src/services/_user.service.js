const sequelize = require('../configs/_database');
const User = require('../models/_user.model');
const Order = require('../models/_order.model');
const { Op } = require('sequelize');



/**
 * The function `getTopUsersWithMostOrders` retrieves the top 10 users with the most orders, along with
 * their user ID, username, and order count.
 * @returns The function `getTopUsersWithMostOrders` is returning a promise that resolves to an array
 * of objects. Each object represents a user and contains the following properties: `id`, `username`,
 * and `order_count`. The users are sorted in descending order based on their `order_count` property.
 * The maximum number of users returned is limited to 10.
 */
const getTopUsersWithMostOrders = async () => {
  try {
    const topUsers = await User.findAll({
      attributes: [
        'id',
        'username',
        [sequelize.literal('(SELECT COUNT(*) FROM Orders WHERE Orders.userId = User.id)'), 'order_count'],
      ],
      order: sequelize.literal('order_count DESC'),
      limit: 10,
    });
    // console.log(`users: ${topUsers}`)
    return topUsers;
  } catch (error) {
    // console.log(error.message)
    throw new Error(error.message)
  }
};
/**
 * The function `createUser` creates a new user with the given username and email.
 * @param username - The username parameter is a string that represents the username of the user being
 * created.
 * @param email - The `email` parameter is a string that represents the email address of the user.
 * @returns The createUser function is returning a promise that resolves to the created User object.
 */
const createUser = async (userInput) => {
    const { username, email } = userInput;
    try {
        return await User.create({ username, email });
    } catch (error) {
        throw new Error(error.message)
    }
  };
  /**
   * The function `getUserOrders` retrieves a list of orders associated with a given user ID from a
   * database using Sequelize.
   * @param userId - The `userId` parameter is the unique identifier of the user for whom we want to
   * retrieve the orders. It is used to filter the orders in the database query.
   * @returns The function `getUserOrders` returns a list of orders associated with the specified
   * `userId`.
   */

const getUserOrders = async (userId) => {
    console.log(userId)
  try {
    // Use Sequelize raw query to query the database for orders associated with the user
    const orders = await Order.findAll({
      where: {
        userId: {
          [Op.eq]: parseInt(userId) // Use userId directly as a parameter
        }
      },
    });

    // Return the list of orders
    return orders;
  } catch (error) {
    // Handle any errors that may occur during the database query
    throw new Error(error.message);
  }
};


module.exports = {
  getTopUsersWithMostOrders,
  createUser,
  getUserOrders
};
