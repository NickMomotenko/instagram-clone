import React, { useState, useEffect } from "react";

import { LogoBannerWrapp } from "./styled";

import Text from "../../UI/Text";
import Logo from "../Logo";
import { useActive } from "../../hooks/useActive";

const LogoBanner = ({ isPreloaderActive }) => {
  const {isActive, setIsActive} = useActive();

  useEffect(() => {
    if (isPreloaderActive) setIsActive(true);
  }, [isPreloaderActive]);

  return (
    <LogoBannerWrapp active={isActive}>
      <Logo />
      <Text
        text="Developed by Nick Momotenko"
        style={{ fontSize: 16, marginTop: 6 }}
      />
    </LogoBannerWrapp>
  );
};

export default LogoBanner;
