const { sequelize } = require('./configs/_database'); // Import your Sequelize instance
const User = require('./models/_user.model');
const Order = require('./models/_user.model');

// Function to create a random user
const createUser = async () => {
  const user = await User.create({
    username: `user${Math.floor(Math.random() * 100)}`,
    email: `user${Math.floor(Math.random() * 100)}@example.com`,
  });
  return user;
};

// Function to create a random order for a user
const createOrder = async (userId) => {
  const order = await Order.create({
    order_date: new Date(),
    total_amount: Math.floor(Math.random() * 1000),
    userId: userId,
  });
  return order;
};

// Function to generate and insert random data
const insertRandomData = async () => {
  try {
    // Create 50 random users
    const users = [];
    for (let i = 0; i < 50; i++) {
      const user = await createUser();
      users.push(user);
    }

    // Create 50 random orders, potentially with user interchange
    for (let i = 0; i < 50; i++) {
      const randomUserId = users[Math.floor(Math.random() * users.length)].id;
      await createOrder(randomUserId);
      console.log()
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    // await sequelize.close();
  }
};

// Call the function to insert random data
module.exports= insertRandomData