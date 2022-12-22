import React from "react";
import { useActive } from "../../hooks/useActive";

import { BurgerWrapp, BurgerLine } from "./styled";

const Burger = (props) => {
  const { isActive, onClick } = props;

  return (
    <BurgerWrapp
      isActive={isActive}
      onClick={onClick}
      {...props}
    >
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerWrapp>
  );
};

export default Burger;
