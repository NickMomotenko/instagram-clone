import React from "react";

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

  return (
    <LoginWrapp>
      <LogoBanner />
      <LoginForm login={login} />
    </LoginWrapp>
  );
};

export default Login;
