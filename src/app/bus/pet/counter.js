import React from "react";
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";

export const Counter = props => {
  const { loading, error, data } = useQueryAvailablePets();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return <p>Available pets: {data.availablePets}</p>;
};
