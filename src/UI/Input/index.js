import React from "react";

import styled from "styled-components";

import Icon from "../Icon";

const InputWrapp = styled.div`
  background: #f8fbff;
  box-shadow: inset 0px 4px 40px rgba(175, 193, 217, 0.12);
  border-radius: 8px;
  max-height: 48px;

  padding: 12px 15px;
  position: relative;

  display: flex;
  align-items: center;
`;

const InputChanger = styled.input`
  font-size: 15px;
  color: #afc1d9;
  background-color: transparent;

  &::placeholder {
    font-size: 15px;
    line-height: 20px;
    font-weight:400;
    color: #afc1d9;
  }
`;

const Input = ({ value, onChange, onFocus, placeholder, icon , ...props }) => {
  return (
    <InputWrapp {...props}>
      {icon && <Icon url={icon} style={{ marginRight: 10 }} />}
      <InputChanger
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </InputWrapp>
  );
};

export default Input;
