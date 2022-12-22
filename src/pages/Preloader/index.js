import React, { useEffect } from "react";

import {
  PreloaderWrapp,
  PreloaderLogo,
  PreloaderLogoBg,
  PreloaderContent,
} from "./styled";

const Preloader = ({ isActive }) => {
  return (
    <PreloaderWrapp activeStatus={true}>
      <PreloaderLogoBg>
        <PreloaderContent>
          <PreloaderLogo />
        </PreloaderContent>
      </PreloaderLogoBg>
    </PreloaderWrapp>
  );
};

export default Preloader;
