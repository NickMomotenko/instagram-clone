import React from "react";

import styled from "styled-components";

import { Row } from "../../UI/Layout";
import Input from "../../UI/Input";

import Logo from "../Logo";

import { useInput } from "../../hooks/useInput";

import searchIcon from "../../assets/icons/search.svg";


const HeaderWrapp = styled.header`
  min-height: 90px;
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 10px 40px rgba(231, 237, 243, 0.4);

  padding: 21px 30px;
`;

const Header = () => {
  const searchInput = useInput();

  return (
    <HeaderWrapp>
      <Row center btw>
        <Logo />
        <Input
          value={searchInput.value}
          onChange={searchInput.onChange}
          onFocus={searchInput.onFocus}
          placeholder="Search..."
          icon={searchIcon}
        />
      </Row>
    </HeaderWrapp>
  );
};

export default Header;
