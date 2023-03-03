import React from "react";

import { LogoutButtonWrapp, LogoutButtonIcon } from "./styled";

const LogoutButton = ({ icon , onClick }) => {
  return (
    <LogoutButtonWrapp onClick={onClick}>
      <LogoutButtonIcon src={icon} />
    </LogoutButtonWrapp>
  );
};

export default LogoutButton;
