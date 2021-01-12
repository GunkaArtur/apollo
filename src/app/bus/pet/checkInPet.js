import React from "react";
import { useCheckin } from "./hooks/useCheckIn";

export const CheckInPet = () => {
  const { checkIn, pet, loading, error } = useCheckin();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error {error.message}</p>;
  }

  const petJSX = pet && (
    <div>
      <p>{pet.name}</p>
      <p>{pet.id}</p>
    </div>
  );

  return (
    <div>
      <h1>CheckIn Pet</h1>
      <button onClick={() => checkIn("C-3")}>Check In</button>
      {petJSX}
    </div>
  );
};
