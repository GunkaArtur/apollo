import React from "react";
// import { CustomerList } from "./list";
import { CreateCustomer } from "./createCustomer";
import { Login } from "./login";

export const Customers = () => {
  return (
    <div>
      <h1>Customer</h1>
      <Login />
      <CreateCustomer />
      {/*<CustomerList />*/}
    </div>
  );
};
