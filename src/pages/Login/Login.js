import React, { useState } from "react";

import styled from "styled-components";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import loginBg from "../../assets/bg/login-bg.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAuth } from "../../hooks/auth";

const LoginWrapp = styled.div`
  background: url(${loginBg}) center no-repeat;

  background-size: cover;

  height: 100%;
  width: 100%;
`;

const Login = () => {
  const { login } = useAuth();

  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <LoginWrapp>
      <LogoBanner />
      <LoginForm
        login={login}
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
      />
    </LoginWrapp>
  );
};

export default Login;
