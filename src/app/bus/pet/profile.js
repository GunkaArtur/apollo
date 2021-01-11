import React from "react";
import { useQueryProfile } from "./hooks/useQueryProfile";

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  const loadProfile = () => {
    getProfile({
      variables: {
        id: "C-5"
      }
    });
  };

  return (
    <div>
      <h1>Profile</h1>
      {profile && profile.name}
      <button onClick={loadProfile}>Get Profile</button>
    </div>
  );
};
