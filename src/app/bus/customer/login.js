import React from "react";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
  const { handleLogin, handleSave, user, error, loading } = useLogin();

  if (loading) {
    return <p>Checking data...</p>;
  }

  if (error) {
    return <p>Some error {error.message}</p>;
  }

  const userJSX = user && (
    <div>
      <h2>Hello {user.name}</h2>
    </div>
  );

  return (
    <div>
      {!user && (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            name={"username"}
            placeholder={"username"}
            onChange={handleLogin}
          />
          <input
            type="password"
            name={"password"}
            placeholder={"password"}
            onChange={handleLogin}
          />
          <button type={"submit"} onClick={handleSave}>
            Log in
          </button>
        </div>
      )}

      {userJSX}
    </div>
  );
};
