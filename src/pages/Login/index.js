import React, { useState } from "react";

import { LoginWrapp } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../hooks/auth";

const Login = React.memo((props) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [createNewAccount, setCreateNewAccount] = useState(false);

  React.useEffect(() => {
    console.log(111);
  });

  return (
    <LoginWrapp>
      <LogoBanner />
      <LoginForm
        login={props.login}
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
        createNewAccount={createNewAccount}
        setCreateNewAccount={setCreateNewAccount}
      />
    </LoginWrapp>
  );
});

export default Login;
