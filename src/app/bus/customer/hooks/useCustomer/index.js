import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useForm } from "../useForm";

const mutationCreateUser = loader("./gql/mutationCreateAccount.graphql");

export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateUser);

  const { form, handleChange } = useForm({
    name: "",
    username: "",
    password: ""
  });

  const handleSave = () => {
    addUser({
      variables: {
        account: form
      }
    });
  };

  return {
    handleChange,
    handleSave,
    createdAccount: data && data.createAccount
  };
};
