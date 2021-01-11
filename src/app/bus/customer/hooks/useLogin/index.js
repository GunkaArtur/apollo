import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from "react";

const mutationLogin = loader("./gql/mutationLogIn.graphql");

export const useLogin = () => {
  const [values, setValues] = useState({
    logIn: {
      password: "",
      username: ""
    }
  });
  const [logUser, { data, loading, error }] = useMutation(mutationLogin);

  const handleLogin = e => {
    e.persist();
    setValues(prevValues => ({
      logIn: {
        ...prevValues.logIn,
        [e.target.name]: e.target.value
      }
    }));
  };

  const handleSave = () => {
    logUser({
      variables: {
        password: values.logIn.password,
        username: values.logIn.username
      }
    });
  };

  if (data) {
    localStorage.setItem("token", JSON.stringify(data.logIn.token));
  }

  return {
    handleLogin,
    handleSave,
    user: data && data.logIn.customer,
    loading,
    error
  };
};
