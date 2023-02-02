const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
//const myGraphQLSchema = require('./schema')
const { GraphQLServer } = require("graphql-yoga");
const { createServer } = require("node:http");
const { schema } = require("./resolvers/index");
const app = express();

// to access graphql API from the client side
app.use(cors());
// bodyParser is needed just for POST.
//app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// for the graphiql interface
//app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});
//console.log(schema);
async function startServer() {
  const server = new ApolloServer({schema});
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}
startServer();
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Graphql Server started on: http://localhost:${port}`);
});
