import React from "react";

import styled from "styled-components";

const SideBarWrapp = styled.div`
  width: 360px;
  border: 1px solid #ebf1fb;
  padding: 30px;

  background-color: #fff;
`;

const SideBar = (props) => {
  return <SideBarWrapp {...props}>{props.children}</SideBarWrapp>;
};

export default SideBar;
