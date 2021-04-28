import React from "react";

import styled from "styled-components";

import Icon from "../Icon";

const ButtonWrapp = styled.button``;

const Button = ({ text, icon, active, ...props }) => {
  return (
    <ButtonWrapp {...props}>
      {text && text}
      {icon && <Icon url={icon} fill={active ? "red" : "#D7E0EB"} />}
    </ButtonWrapp>
  );
};

export default Button;
