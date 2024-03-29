import React from "react";

import {
  PreloaderWrapp,
  PreloaderLogo,
  PreloaderLogoBg,
  PreloaderContent,
} from "./styled";

const Preloader = ({ isActive }) => {
  return (
    <PreloaderWrapp activeStatus={isActive}>
      <PreloaderLogoBg>
        <PreloaderContent>
          <PreloaderLogo />
        </PreloaderContent>
      </PreloaderLogoBg>
    </PreloaderWrapp>
  );
};

export default Preloader;
