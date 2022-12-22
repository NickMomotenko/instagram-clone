import React from "react";

import { LoginTextWithLine, LoginRow, Div, LogoBlock } from "./styles";

import { useInput } from "../../hooks/useInput";
import { useForm } from "../../hooks/useForm";

import DefaultButton from "../../UI/DefaultButton";
import Input from "../../UI/Input";
import { Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Form from "../../UI/Form";

import Logo from "../Logo";

import { checkUpperCase, checkValueLength } from "../../helpers/validate-input";

import { routes } from "./index";

const LoginBlock = ({ login, changeRoute }) => {
  let email = useInput({
    validityFunctions: [checkUpperCase, checkValueLength],
  });
  let password = useInput();

  const { handleSubmit } = useForm(login);

  return (
    <Form onSubmit={(e) => handleSubmit(e, [email, password])}>
      <LogoBlock>
        <Logo />
      </LogoBlock>
      <Input
        value={email.value}
        error={email.error}
        onChange={email.onChange}
        onBlur={email.checkValidity}
        placeholder="username"
        ref={email.ref}
        style={{ marginBottom: 3 }}
      />
      <Input
        value={password.value}
        error={password.error}
        onChange={password.onChange}
        onBlur={password.checkValidity}
        placeholder="password"
        ref={password.ref}
        type="password"
      />
      <DefaultButton
        text="Login"
        type="submit"
        fullWidth
        bgColor="#0095f6"
        style={{ marginTop: 15 }}
      />
      <Row center style={{ marginTop: 20 }}>
        <Div />
        <LoginTextWithLine text="or" bold color="#917777" />
        <Div />
      </Row>

      <LoginRow style={{ marginTop: 20 }}>
        <DefaultButton
          text="Create a new account"
          bgColor="#0095f6"
          onClick={(event) => {
            event.preventDefault();
            changeRoute(routes.create);
          }}
        />
      </LoginRow>
      <LoginRow style={{ marginTop: 10 }}>
        <Text
          as="button"
          text="Forgot password?"
          color="#00376b"
          onClick={(e) => {
            e.preventDefault();
            changeRoute(routes.forgot);
          }}
        />
      </LoginRow>
    </Form>
  );
};

export default LoginBlock;
