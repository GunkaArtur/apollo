import React from "react";
import { useAllCustomersQuery } from "./hooks/useQueryAllCustomers";

export const CustomerList = () => {
  const { loading, error, customers } = useAllCustomersQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  const listJSX = customers.map(({ name, username, dateCreated }, index) => (
    <div key={index}>
      <p>{name}</p>
      <p>{username}</p>
      <p>{dateCreated}</p>
      <hr />
    </div>
  ));

  return (
    <>
      <h2>Customers list</h2>
      {listJSX}
    </>
  );
};
