import React, { useState } from "react";
import { useHistory } from "react-router";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);

  const history = useHistory();

  const login = (name, password) => {
    console.log(name, password);
    history.push("/posts");
    setAuth(true);
  };

  return { auth, login };
};
