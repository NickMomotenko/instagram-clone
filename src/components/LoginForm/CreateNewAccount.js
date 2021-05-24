import React from "react";

import { LoginRow } from "./styles";

import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";
import { Block } from "../../UI/Layout";

const CreateNewAccount = (props) => {
  const { login } = props;

  return (
    <Block style={{ textAlign: "center" }}>
      <Text
        text="Create new account"
        bold
        center
        style={{ fontSize: 17, marginBottom: 15 }}
      />
      <Text
        text="Sign up to see photos and videos from your friends."
        style={{ marginBottom: 15 }}
      />
      <LoginRow>
        <Input
          value=""
          onChange={() => {}}
          placeholder="Mobile number or Email"
          style={{ width: "100%" }}
        />
      </LoginRow>
      <LoginRow>
        <Input
          value=""
          onChange={() => {}}
          placeholder="Fullname"
          style={{ width: "100%" }}
        />
      </LoginRow>
      <LoginRow>
        <Input
          value=""
          onChange={() => {}}
          placeholder="Username"
          style={{ width: "100%" }}
        />
      </LoginRow>
      <LoginRow>
        <Input
          value=""
          onChange={() => {}}
          placeholder="Password"
          style={{ width: "100%" }}
        />
      </LoginRow>

      <DefaultButton
        text="Sing up"
        fullWidth
        bgColor="#0095f6"
        style={{ marginTop: 25 }}
        onClick={(e) => {
          e.preventDefault();
          login("test", 1444114);
        }}
      />
    </Block>
  );
};

export default CreateNewAccount;
