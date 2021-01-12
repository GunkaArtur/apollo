import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./init/client";
import { Pet } from "./bus/pet";
// import { Customers } from "./bus/customer";
import { Login } from "./bus/customer/login";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Login />
      <Pet />
      {/*<Customers />*/}
    </ApolloProvider>
  );
};
