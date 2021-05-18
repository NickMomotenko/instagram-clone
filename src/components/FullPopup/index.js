import React from "react";
import { usePopup } from "../../hooks/popup";
import { FullPopupWrapp } from "./styles";

const FullPopup = () => {
  const popup = usePopup();

  return <FullPopupWrapp active={popup.isActive}></FullPopupWrapp>;
};

export default FullPopup;
