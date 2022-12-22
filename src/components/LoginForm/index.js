import React, { useState } from "react";

import { LoginFormWrapp } from "./styles";

import ForgotPassword from "./ForgotPassword";
import CreateNewAccount from "./CreateNewAccount";
import LoginBlock from "./LoginBlock";
import { useLocalStorage } from "../../hooks/localStorage";

export const routes = {
  login: "login",
  create: "create_account",
  forgot: "forgot_password",
};

const LoginForm = (props) => {
  const [activeRoute, setActiveRoute] = useLocalStorage(
    "loginScreen",
    routes.login
  );

  const changeRoute = (route) => setActiveRoute(route);

  React.useEffect(() => {
    setActiveRoute(activeRoute);
  }, [activeRoute]);

  const renderComponent = () => {
    switch (activeRoute) {
      case routes.login:
        return <LoginBlock changeRoute={changeRoute} {...props} />;
      case routes.create:
        return <CreateNewAccount changeRoute={changeRoute} {...props} />;
      case routes.forgot:
        return <ForgotPassword changeRoute={changeRoute} {...props} />;
    }
  };

  return <LoginFormWrapp {...props}>{renderComponent()}</LoginFormWrapp>;
};

export default LoginForm;
