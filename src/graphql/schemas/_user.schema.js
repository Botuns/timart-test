const { gql } = require('apollo-server-express');

/* The `const typeDefs` is defining the GraphQL schema using the `gql` function from the
`apollo-server-express` package. */
const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    orders: [Order]
  }

  type Order {
    id: ID!
    order_date: String
    total_amount: Float
  }

  input UserInput {
    username: String
    email: String
  }

  input OrderInput {
    userId: ID!
    order_date: String
    total_amount: Float
  }

  type Query {
    user(userId: ID!): User
    getTopUsersWithMostOrders: [User]
    userOrders(userId: ID!): [Order] 
  }  

  type Mutation {
    createUser(userInput: UserInput): User
    createOrder(orderInput: OrderInput): Order
  }
`;

module.exports = typeDefs;
