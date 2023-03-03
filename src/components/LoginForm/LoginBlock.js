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

import { authRoutes } from "../../helpers/base-routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/auth/types";

const LoginBlock = () => {
  let email = useInput({
    initialValue: "",
    option: {
      validityFunctions: [checkUpperCase, checkValueLength],
    },
  });
  let password = useInput({ initialValue: "" });

  const dispatch = useDispatch();

  const { handleSubmit } = useForm(() => {
    dispatch({ type: LOGIN, payload: { data: [email.value, password.value] } });
  });

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
        bgcolor="#0095f6"
        style={{ marginTop: 15 }}
      />
      <Row center style={{ marginTop: 20 }}>
        <Div />
        <LoginTextWithLine text="or" bold color="#917777" />
        <Div />
      </Row>

      <LoginRow style={{ marginTop: 20 }}>
        <DefaultButton
          as={Link}
          to={authRoutes.create}
          text="Create a new account"
          bgcolor="#0095f6"
        />
      </LoginRow>
      <LoginRow style={{ marginTop: 10 }}>
        <Text
          as={Link}
          to={authRoutes.forgot}
          text="Forgot password?"
          color="#00376b"
        />
      </LoginRow>
    </Form>
  );
};

export default LoginBlock;
