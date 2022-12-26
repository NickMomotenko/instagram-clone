import React from "react";

import { useDispatch } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";

import { LoginWrapp, DemoButton, LoginFormWrapp } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";

import { useAuth } from "../../hooks/auth";

export const loginRoutes = {
  login: "/login",
  create: "/create_account",
  forgot: "/forgot_password",
};

const Login = React.memo(({ isPreloaderActive }) => {
  const { login } = useAuth();

  const dispath = useDispatch();

  return (
    <LoginWrapp>
      <LogoBanner isPreloaderActive={isPreloaderActive} />

      <LoginFormWrapp>
        <Outlet />
      </LoginFormWrapp>
      
      <DemoButton>
        <Text text="If you are here first time" bold />
        <Text
          text="You can use Demo Version , with no login and registration"
          style={{ marginBottom: 10 }}
        />
        <DefaultButton
          text="Try Demo Version"
          onClick={(e) => {
            e.preventDefault();
            // login("demo", "demo");

            dispath({ type: "AUTH/LOGIN", data: ["test@mail.ru", "11241414"] });
          }}
        />
      </DemoButton>
    </LoginWrapp>
  );
});

export default Login;
