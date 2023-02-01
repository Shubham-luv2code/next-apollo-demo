import React from "react";
import "../styles/index.scss"
import { ApolloProvider } from "@apollo/client";
import client from "../lib/with-apollo";
import Container from "../container";

const Hoc = ({ Component }) => (
  <ApolloProvider client={client}>
    <Container>
      <Component />
    </Container>
  </ApolloProvider>
);

export default Hoc;
