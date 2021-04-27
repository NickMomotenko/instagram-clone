import React from "react";

import styled from "styled-components";

const SideBarWrapp = styled.div`
  width: 360px;
`;

const SideBar = (props) => {
  return <SideBarWrapp>{props.children}</SideBarWrapp>;
};

export default SideBar;
