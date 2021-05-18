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
  margin-top: 18px;
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
  let forgotPasswordInput = useInput();

  const { login, forgotPassword, setForgotPassword } = props;

  return (
    <LoginFormWrapp {...props}>
      {forgotPassword ? (
        <Block style={{ textAlign: "center" }}>
          <Text
            text="Trouble Logging In?"
            bold
            center
            style={{ fontSize: 17, marginBottom: 15 }}
          />
          <Text
            text="Enter your email, phone, or username and we'll send you a link to get back into your account."
            style={{ marginBottom: 15 }}
          />
          <Input
            value={forgotPasswordInput.value}
            onChange={forgotPasswordInput.onChange}
            placeholder="Email , phone or username"
          />
          <DefaultButton
            text="Send Login Link"
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
            <Text as="button" text="Create New Account" color="#385185" />
          </LoginRow>
          <LoginRow>
            <Text as="button" text="Back to Login" color="#385185" />
          </LoginRow>
        </Block>
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
            <Text as="button" text="Log in with Facebook" color="#385185" />
          </LoginRow>
          <LoginRow>
            <Text
              as="button"
              text="Forgot password?"
              color="#00376b"
              onClick={() => setForgotPassword(true)}
            />
          </LoginRow>
        </>
      )}
    </LoginFormWrapp>
  );
};

export default LoginForm;
