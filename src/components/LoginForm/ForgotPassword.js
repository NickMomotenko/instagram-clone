import React from "react";

import { useInput } from "../../hooks/useInput";

import { LoginTextWithLine, Div, LoginRow } from "./styles";

import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";
import { Block, Row } from "../../UI/Layout";

const ForgotPassword = (props) => {
  const { login, setForgotPassword, setCreateNewAccount } = props;

  let forgotPasswordInput = useInput();

  return (
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
        <Text
          as="button"
          text="Create New Account"
          color="#385185"
          onClick={(e) => {
            e.preventDefault();
            setCreateNewAccount(true);
          }}
        />
      </LoginRow>
      <LoginRow>
        <Text
          as="button"
          text="Back to Login"
          color="#385185"
          onClick={(e) => {
            e.preventDefault();
            setForgotPassword(false);
          }}
        />
      </LoginRow>
    </Block>
  );
};

export default ForgotPassword;
