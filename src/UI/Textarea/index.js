import React from "react";

import styled, { css } from "styled-components";

const TextareaWrapp = styled.textarea`
  background: #f8fbff;
  box-shadow: inset 0px 4px 40px rgba(175, 193, 217, 0.12);
  border-radius: 8px;
  min-height: 50px;

  width: 100%;

  padding: 12px 15px;

  font-size: 15px;
  color: #afc1d9;

  &::placeholder {
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    color: #afc1d9;
  }

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
      box-shadow: none;
      border-color: #afc1d9;
      padding: 5px 10px;
      margin-right: 12px;
    `}
`;

const Textarea = (props) => {
  return <TextareaWrapp {...props}></TextareaWrapp>;
};

export default Textarea;
