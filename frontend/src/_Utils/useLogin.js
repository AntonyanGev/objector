import { useState } from "react";
import client from "../app/lib/graphQlClient";
import { CHECK_USER } from "../app/service/query/logIn";

export const useLogin = (closeModal) => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLogin = async (data) => {
    try {
      setLoginError("");
      const variables = { email: data.email, password: data.password };
      const response = await client.request(CHECK_USER, variables);

      setLoginSuccess(`Login successful! Token: ${response.login.token}`);
      setTimeout(() => {
        closeModal();
        setLoginSuccess("");
      }, 2000);
    } catch (error) {
      setLoginError(error.message || "Login failed");
    }
  };

  return {
    handleLogin,
    loginError,
    loginSuccess,
  };
};
