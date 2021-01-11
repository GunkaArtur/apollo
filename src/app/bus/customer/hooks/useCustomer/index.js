import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from "react";

const mutationCreateUser = loader("./gql/mutationCreateAccount.graphql");

export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateUser);
  const [values, setValues] = useState({
    account: {
      name: "",
      username: "",
      password: ""
    }
  });

  const handleChange = e => {
    e.persist();
    setValues(prevValues => ({
      account: {
        ...prevValues.account,
        [e.target.name]: e.target.value
      }
    }));
  };

  const handleSave = () => {
    const { account } = values;
    addUser({
      variables: {
        acc: account
      }
    });
  };

  return {
    handleChange,
    handleSave,
    createdAccount: data && data.createAccount
  };
};
