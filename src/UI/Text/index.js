import React from "react";

import styled from "styled-components";

const TextWrapp = styled.div`
  font-size: 14px;
  color: ${(props) => props.color || "#1B1D28"};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

const Text = ({ text, ...props }) => {
  return (
    <TextWrapp {...props}>
      {props.children}
      {text}
    </TextWrapp>
  );
};

export default Text;
