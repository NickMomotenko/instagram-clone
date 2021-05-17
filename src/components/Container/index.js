import React from "react";

import styled from "styled-components";

const ContainerWrapp = styled.div`
  width: 1350px;
  margin: 0 auto;
  max-width: 100%;
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
