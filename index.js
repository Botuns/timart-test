const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/schemas/_user.schema');
const resolvers = require('./src/graphql/resolvers/_user.resolver');
const sequelize = require('./src/configs/_database');
const insertRandomData = require('./src/random');
const insertRandomOrders = require('./src/createOrders');
const app = express();
const PORT = 4000

/* The line `const server = new ApolloServer({ typeDefs, resolvers });` is creating a new instance of
the ApolloServer class. It takes two arguments: `typeDefs` and `resolvers`. */
const server = new ApolloServer({ typeDefs, resolvers });
(async () => {
    await server.start();
  
    // Apply Apollo Server middleware
    server.applyMiddleware({ app });
  
    // Initialize Sequelize and sync the models
    await sequelize.sync();
  
    app.listen({ port: PORT }, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    //   insertRandomData()
            // insertRandomOrders(70);
    });
  })();
