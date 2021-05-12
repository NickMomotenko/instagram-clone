import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import Text from "../../UI/Text";
import Logo from "../Logo";

const LogoBannerWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0 15px 20px #bcbcef;
  border-radius: 0 0 35px 35px;
  display: inline-block;
  padding: 30px;
  width: 450px;
  position: absolute;
  left: 310px;
  top: 0;
  max-width: 219px;

  opacity: 0;
  top: -100%;

  transition: opacity, top 0.5s;

  ${(props) =>
    props.active === true &&
    css`
      opacity: 1;
      top: 0;
    `}
`;

const LogoBanner = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 300);
  }, []);

  return (
    <LogoBannerWrapp active={active}>
      <Logo />
      {/* <Text text="Instagram" bold style={{ fontSize: 30, marginTop: 12 }} /> */}
      <Text
        text="Developed by Nick Momotenko"
        style={{ fontSize: 16, marginTop: 6 }}
      />
    </LogoBannerWrapp>
  );
};

export default LogoBanner;
