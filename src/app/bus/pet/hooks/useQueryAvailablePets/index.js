import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {} from "./gql/queryAvailablePets.graphql";

const queryAvailablePets = loader("./gql/queryAvailablePets.graphql");

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets);
};
