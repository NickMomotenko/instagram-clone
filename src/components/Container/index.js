import React from "react";

import styled from "styled-components";

const ContainerWrapp = styled.div`
  width: 1350px;
  margin: 0 auto;
  max-width: 100%;
  height: 100%;

  // overflow-x: hidden;
`;

const Container = ({ children, ...props }) => {
  return <ContainerWrapp {...props}>{children}</ContainerWrapp>;
};

export default Container;
