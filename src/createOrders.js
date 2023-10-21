const { sequelize } = require('./configs/_database'); // Import your Sequelize instance
const Order = require('./models/_order.model');

// Function to create a random order for a random user
const createRandomOrder = async () => {
  try {
    const randomUserId = Math.floor(Math.random() * 150) + 1; // Generates a random user ID between 1 and 150
    const order = await Order.create({
      order_date: new Date(),
      total_amount: Math.floor(Math.random() * 1000),
      userId: randomUserId,
    });

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to insert random orders for random users
/**
 * The function `insertRandomOrders` inserts a specified number of random orders into a database and
 * logs the success or failure of the operation.
 * @param numOrders - The `numOrders` parameter is the number of random orders that you want to insert
 * into the database.
 */
const insertRandomOrders = async (numOrders) => {
  try {
    for (let i = 0; i < numOrders; i++) {
      await createRandomOrder();
    }

    console.log(`Inserted ${numOrders} random orders successfully.`);
  } catch (error) {
    console.error('Error inserting orders:', error);
  } finally {
    // Close the database connection
    // await sequelize.close();
  }
};

// Specify the number of random orders to insert
const numRandomOrders = 50; // You can change this to the desired number of orders

// Call the function to insert random orders
// insertRandomOrders(numRandomOrders);
module.exports= insertRandomOrders
