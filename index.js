const { ApolloServer } = require('apollo-server');
const { prisma } = require('./prisma-client');
const types = require('./src/types');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
