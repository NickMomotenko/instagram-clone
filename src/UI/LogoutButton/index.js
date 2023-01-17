import React from "react";

import { LogoutButtonWrapp, LogoutButtonIcon } from "./styled";

const LogoutButton = ({ icon }) => {
  return (
    <LogoutButtonWrapp>
      <LogoutButtonIcon src={icon} />
    </LogoutButtonWrapp>
  );
};

export default LogoutButton;
