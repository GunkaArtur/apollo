import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllCustomers = loader("./gql/queryAllQustomers.graphql");

export const useAllCustomersQuery = () => {
  const { loading, error, data } = useQuery(queryAllCustomers);

  return { loading, error, customers: data && data.allCustomers };
};
