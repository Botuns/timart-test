
const Order = require("../models/_order.model");

/**
 * The function creates an order with the given user ID, order date, and total amount.
 * @param userId - The user ID is a unique identifier for the user who is placing the order. It is used
 * to associate the order with the correct user in the database.
 * @param order_date - The order_date parameter represents the date when the order was placed.
 * @param total_amount - The total amount is the sum of all the items in the order, including any taxes
 * or fees. It represents the total cost of the order.
 * @returns a promise that resolves to the created order object.
 */
const createOrder = async (orderInput) => {
    const { userId, order_date, total_amount } = orderInput
    try {
        return await Order.create({ userId, order_date, total_amount });
    } catch (error) {
        throw new Error(error.message)
    }
};

module.exports = {
  createOrder,
};
