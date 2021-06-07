const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schema')
const helmet = require('helmet');

const port = process.env.PORT || 5000

const app = express();

const startServer = async () => {

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  // to access graphql API from the client side
  app.use(cors({}));
  app.use(helmet());

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: port }, resolve));
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  return { server, app };
}

startServer();

module.exports = {app};