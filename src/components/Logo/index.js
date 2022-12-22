import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/icons/logo.png";

const LogorWrapp = styled.a`
  display: inline-block;
  margin-right:5px;

  /* убрать в последствии */
  /* @media screen and (max-width:545px){
    width: 28px;
    overflow: hidden;
  } */
`;

const LogoIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))``;

const Logo = (props) => {
  return (
    <LogorWrapp href="#" {...props}>
      <LogoIcon alt="logotype" url={logoIcon} />
    </LogorWrapp>
  );
};

export default Logo;
