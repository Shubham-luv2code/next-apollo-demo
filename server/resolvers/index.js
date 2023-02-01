const { makeExecutableSchema } = require("graphql-tools");
const { getRandomUsers } = require("../mock-data/casual");

const typeDefs = `
type Query {
    user(limit: Int!, offset: Int!): [User]
}
type User {
    uuid: String!
    fullName: String!
    address: String!
    phoneNumber: String!
    email: String!
    city: String!
    country: String!
}`;

const resolveUserData = (args) => {
  const { limit = 20, offset } = args;
  return getRandomUsers.slice(offset, offset + limit);
};

const resolvers = {
  Query: {
    user: (root, args, context, info) => {
      //console.table(getRandomUsers);
      console.log(args, "args");
      return resolveUserData(args);
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
