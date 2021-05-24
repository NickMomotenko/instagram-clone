import React from "react";

import { LoginFormWrapp, LoginTextWithLine, LoginRow, Div } from "./styles";

import { useInput } from "../../hooks/useInput";

import DefaultButton from "../../UI/DefaultButton";
import Input from "../../UI/Input";
import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

import Logo from "../Logo";
import ForgotPassword from "./ForgotPassword";

const LoginForm = (props) => {
  let email = useInput();
  let password = useInput();

  const { login, forgotPassword, setForgotPassword } = props;

  return (
    <LoginFormWrapp {...props}>
      {forgotPassword ? (
        <ForgotPassword {...props} />
      ) : (
        <>
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
          <LoginRow>
            <Text
              as="button"
              text="Log in with Facebook"
              color="#385185"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </LoginRow>
          <LoginRow>
            <Text
              as="button"
              text="Forgot password?"
              color="#00376b"
              onClick={(e) => {
                e.preventDefault();
                setForgotPassword(true);
              }}
            />
          </LoginRow>
        </>
      )}
    </LoginFormWrapp>
  );
};

export default LoginForm;
