import React from "react";

import styled, { css } from "styled-components";

const DefaultButtonWrapp = styled.button`
  padding: 7px 27px;
  background-color: #000000;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display:inline-block;

  &:disabled {
    background-color: #eceaea;
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}
`;

const DefaultButton = ({ text, type = "button", ...props }) => {
  return (
    <DefaultButtonWrapp type={type} {...props}>
      {text}
    </DefaultButtonWrapp>
  );
};

export default DefaultButton;
