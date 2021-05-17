import React from "react";

import styled from "styled-components";

import { useInput } from "../../hooks/useInput";

import DefaultButton from "../../UI/DefaultButton";
import Input from "../../UI/Input";
import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

import Logo from "../Logo";

const LoginFormWrapp = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  box-shadow: 0 15px 20px #bcbcef;
  border-radius: 35px;
  display: inline-block;
  padding: 30px;
  width: 350px;
`;

const LoginTextWithLine = styled(Text)`
  display: inline-block;
  margin: 0 18px;
`;

const LoginRow = styled(Row)`
  justify-content: center;
`;

const Div = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background-color: #dbdbdb;
  height: 0.5px;
`;

const LoginForm = (props) => {
  let email = useInput();
  let password = useInput();

  const { login } = props;

  return (
    <LoginFormWrapp {...props}>
      <Block style={{ textAlign: "center" }}>
        <Logo style={{ marginBottom: 20 }} />
      </Block>

      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="username"
        style={{ marginBottom: 20 }}
      />
      <Input
        value={password.value}
        onChange={password.onChange}
        placeholder="password"
      />
      <DefaultButton
        text="Login"
        fullWidth
        bgColor="#0095f6"
        style={{ marginTop: 25 }}
        onClick={() => login("test", 1444114)}
      />
      <Row center style={{ marginTop: 20 }}>
        <Div />
        <LoginTextWithLine text="or" bold color="#917777" />
        <Div />
      </Row>
      <LoginRow style={{ marginTop: 18 }}>
        <Text as="button" text="Log in with Facebook" color="#385185" />
      </LoginRow>
      <LoginRow style={{ marginTop: 18 }}>
        <Text as="a" href="#" text="Forgot password?" color="#00376b" />
      </LoginRow>
    </LoginFormWrapp>
  );
};

export default LoginForm;
