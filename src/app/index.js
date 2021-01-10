import React from "react"
import { ApolloProvider } from "@apollo/react-hooks";
import {client} from "./init/client"

export const App = ()=>{
  return (
    <ApolloProvider client={client}>
      <h1>Hello Gunya</h1>
    </ApolloProvider>
  )
}