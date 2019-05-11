const gql = require('graphql-tag');

const types = gql`
  type Query {
    user(id: ID!): User!
    users: [User!]!
    books: [Book!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String, book: ID): User!
    deleteUser(id: ID!): User!
    createBook(name: String!, author: ID!): Book!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    status: Boolean!
    books: [Book]
  }

  type Book {
    id: ID!
    name: String!
    author: User!
  }
`;

module.exports = types;
