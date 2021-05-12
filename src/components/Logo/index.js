import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/icons/logo.png";

const LogorWrapp = styled.a`
  display: inline-block;
`;

const LogoIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))``;

const Logo = (props) => {
  return (
    <LogorWrapp href="#" {...props}>
      <LogoIcon url={logoIcon} />
    </LogorWrapp>
  );
};

export default Logo;
