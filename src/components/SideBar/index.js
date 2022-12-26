import React from "react";

import styled from "styled-components";

const SideBarWrapp = styled.div``;

const SideBar = (props) => {
  return <SideBarWrapp {...props}>{props.children}</SideBarWrapp>;
};

export default SideBar;
