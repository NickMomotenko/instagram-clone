import React from "react";

import { LoginWrapp, DemoButton } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";
import LoginForm from "../../components/LoginForm";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";

import { useAuth } from "../../hooks/auth";

const Login = React.memo(({ isPreloaderActive }) => {
  const { login } = useAuth();

  return (
    <LoginWrapp>
      <LogoBanner isPreloaderActive={isPreloaderActive} />
      <LoginForm login={login} />
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
            login("demo", "demo");
          }}
        />
      </DemoButton>
    </LoginWrapp>
  );
});

export default Login;
