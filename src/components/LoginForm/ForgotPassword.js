import React from "react";

import { useInput } from "../../hooks/useInput";
import { useForm } from "../../hooks/useForm";

import { LoginTextWithLine, Div, LoginRow } from "./styles";

import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";
import { Block, Row } from "../../UI/Layout";
import Form from "../../UI/Form";
import { routes } from ".";

const ForgotPassword = ({ changeRoute }) => {
  const password = useInput();
  const { handleSubmit } = useForm(() =>
    console.log("forgot pass is ready to submit")
  );

  return (
    <Form onSubmit={(e) => handleSubmit(e, [password])}>
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
          value={password.value}
          error={password.error}
          onChange={password.onChange}
          onBlur={password.checkValidity}
          ref={password.ref}
          placeholder="Email , phone or username"
        />
        <DefaultButton
          text="Send Login Link"
          fullWidth
          bgColor="#0095f6"
          style={{ marginTop: 15 }}
          type="submit"
        />
        <Row center style={{ marginTop: 20 }}>
          <Div />
          <LoginTextWithLine text="or" bold color="#917777" />
          <Div />
        </Row>
        <LoginRow style={{marginTop:15}}>
          <Text
            as="button"
            text="Create New Account"
            color="#385185"
            onClick={(e) => {
              e.preventDefault();
              changeRoute(routes.create);
            }}
          />
        </LoginRow>
        <LoginRow style={{marginTop:15}}>
          <Text
            as="button"
            text="Back to Login"
            color="#385185"
            onClick={(e) => {
              e.preventDefault();
              changeRoute(routes.login);
            }}
          />
        </LoginRow>
      </Block>
    </Form>
  );
};

export default ForgotPassword;
