import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "uri goes here",
  cache: new InMemoryCache(),
});

export default client;