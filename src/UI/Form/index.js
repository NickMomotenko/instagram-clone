import React from "react";

import styled from "styled-components";

export const FormWrapp = styled.form``;

const Form = ({ children, onSubmit }) => {
  return <FormWrapp onSubmit={onSubmit}>{children}</FormWrapp>;
};

export default Form;
