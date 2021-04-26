import React from "react";

import styled from "styled-components";

import Icon from "../Icon";

const ButtonWrapp = styled.button``;

const Button = ({ text, icon, fill, ...props }) => {
  return (
    <ButtonWrapp {...props}>
      {text && text}
      {icon && <Icon url={icon} fill={fill} />}
    </ButtonWrapp>
  );
};

export default Button;
