import React, { useState } from "react";
import { useNavigate } from "react-router";

import { baseRoutes } from "../helpers/base-routes";
import { useLocalStorage } from "./localStorage";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useLocalStorage("isAuth", false);
  const [register, setRegister] = useState(false);

  const history = useNavigate();

  React.useEffect(() => {
    // if (isAuth) {
    //   history(baseRoutes.posts);
    //   // setIsAuth(true);
    // } else {
    //   history(baseRoutes.login);
    //   // setIsAuth(false);
    // }
  }, [isAuth]);

  const login = (username, password) => {
    // if (username === "demo" && password === "demo") {
    //   setIsAuth(true);
    // }
    setIsAuth(true);
  };

  const logOut = () => setIsAuth(false);

  const signUp = (data) => {
    let registerData = {};

    for (const field of data) {
      let {
        value,
        ref: { current },
      } = field;
      let name = current.name;

      registerData[name] = value;
    }

    console.log(`Данные пользователя`, registerData);
  };

  return { isAuth, login, logOut, signUp };
};
