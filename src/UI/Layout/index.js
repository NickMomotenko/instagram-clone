import React from "react";

import styled from "styled-components";

const ColumnWrapp = styled.div``;

const RowWrapp = styled.div`
  display: flex;

  ${(props) => props.center && `align-items:center`};
  ${(props) => props.btw && `justify-content:space-between`};
`;

const PaperWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0 0 5px #7979de;
  padding: 10px;
  border-radius: 12px;
`;

const BlockWrapp = styled.div``;

export const Column = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row = React.forwardRef((props, ref) => {
  return (
    <RowWrapp ref={ref} {...props}>
      {props.children}
    </RowWrapp>
  );
});

export const Block = ({ children, ...props }) => {
  return <BlockWrapp {...props}>{children}</BlockWrapp>;
};

export const Paper = ({ children, ...props }) => {
  return <PaperWrapp {...props}>{children}</PaperWrapp>;
};
