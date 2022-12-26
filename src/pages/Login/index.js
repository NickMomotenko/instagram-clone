import React from "react";

import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { LoginWrapp, DemoButton, LoginFormWrapp } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";

import { LOGIN } from "../../redux/auth/types";

const Login = ({ isPreloaderActive }) => {
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

            dispath({ type: LOGIN, data: ["test@mail.ru", "11241414"] });
          }}
        />
      </DemoButton>
    </LoginWrapp>
  );
};

export default Login;
