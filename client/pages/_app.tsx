import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../lib/with-apollo";

const Hoc = ({ Component }) => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
);

export default Hoc;
