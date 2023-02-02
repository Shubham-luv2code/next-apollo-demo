import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.PORT
  ? `${process.env.PORT}/graphql/user`
  : "https://shubham-infinite-scroll-shubham-luv2code.vercel.app/graphql/user";

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default client;
