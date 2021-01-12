import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const mutationCheckIn = loader("./gql/mutatiomCheckIn.graphql");

export const useCheckin = () => {
  const [_checkIn, { loading, error, data }] = useMutation(mutationCheckIn);

  const checkIn = id => {
    _checkIn({
      variables: {
        id
      }
    });
  };

  const pet = data && data.checkIn.pet;

  return {
    checkIn,
    pet,
    loading,
    error
  };
};
