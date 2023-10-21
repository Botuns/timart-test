const userService = require('../../services/_user.service');
const orderService = require('../../services/_order.service');
const User = require('../../models/_user.model');
const Order = require('../../models/_order.model');

/* The `resolvers` object is defining the resolver functions for the GraphQL schema. */
const resolvers = {
  /* In this code snippet, `Query` is an object that defines the resolver functions for the GraphQL
  schema's query operations. The `Query` object has two properties: `user` and `users`. */
  Query: {
    userOrders: (parent, args) => userService.getUserOrders(args.userId),
    getTopUsersWithMostOrders: () => userService.getTopUsersWithMostOrders(),
  },
  Mutation: {
    createUser: (parent, args) => userService.createUser(args.userInput),
    createOrder: (parent, args) => orderService.createOrder(args.orderInput),
  },
  User: {
    orders: (parent) => Order.findAll({ where: { userId: parent.id } }),
  },
};

module.exports = resolvers;
