const resolvers = {
  Query: {
    user: (_, { id }, ctx) => ctx.prisma.user({ id }),
    users: (_, args, ctx) => ctx.prisma.users(),
    books: (_, args, ctx) => ctx.prisma.books(),
  },
  Mutation: {
    createUser: (_, { name, email }, ctx) =>
      ctx.prisma.createUser({ name, email }),
    updateUser: (_, { id, name, email, book }, ctx) =>
      ctx.prisma.updateUser(
        { where: { id }, data: { name, email, book: { connect: { id: book } } } }
      ),
    deleteUser: (_, { id }, ctx) =>
      ctx.prisma.deleteUser({ id }),
    createBook: (_, { name, author }, ctx) =>
      ctx.prisma.createBook({ name, author: { connect: { id: author } } }),
  },
  User: {
    books: (root, args, ctx) => ctx.prisma.user({ id: root.id }).books()
  },
  Book: {
    author: (root, args, ctx) => ctx.prisma.book({ id: root.id }).author()
  }
};

module.exports = resolvers;
