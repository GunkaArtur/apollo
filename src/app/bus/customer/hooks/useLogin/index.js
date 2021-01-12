import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useForm } from "../useForm";

const mutationLogin = loader("./gql/mutationLogIn.graphql");

export const useLogin = () => {
  const [logUser, { data, loading, error }] = useMutation(mutationLogin);
  const { form, handleChange } = useForm({
    password: "",
    username: ""
  });

  const handleSave = () => {
    logUser({
      variables: form
    });
  };

  if (data) {
    localStorage.setItem("token", JSON.stringify(data.logIn.token));
  }

  return {
    handleLogin: handleChange,
    handleSave,
    user: data && data.logIn.customer,
    loading,
    error
  };
};
