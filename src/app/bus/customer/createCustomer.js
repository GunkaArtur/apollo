import React from "react";
import { useCustomer } from "./hooks/useCustomer";

export const CreateCustomer = () => {
  const { handleChange, handleSave, createdAccount } = useCustomer();

  const customerJSX = createdAccount && (
    <p>Yo customer: {createdAccount.name}</p>
  );
  return (
    <div>
      <h1>Sing Up</h1>
      <input
        type="text"
        name={"name"}
        onChange={handleChange}
        placeholder={"name"}
      />
      <input
        type="text"
        name={"username"}
        onChange={handleChange}
        placeholder={"username"}
      />
      <input
        type="password"
        name={"password"}
        onChange={handleChange}
        placeholder={"password"}
      />
      <button type={"submit"} onClick={handleSave}>
        Sign Up
      </button>
      {customerJSX}
    </div>
  );
};
