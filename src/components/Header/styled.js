import styled from "styled-components";

import { Block, Row } from "../../UI/Layout";
import Logo from "../Logo";

export const HeaderWrapp = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #f0f6fd;
  box-shadow: 0px 0px 30px rgba(231, 237, 243, 0.4);

  padding: 8px 30px;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 0;

    z-index: 5;
  }

  a {
    @media screen and (max-width: 545px) {
      width: 28px;
      overflow: hidden;
    }
  }
`;

export const HeaderAllUser = styled(Block)`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 18px 18px;

  position: absolute;
  width: 100%;
  top: 100%;
  margin-top: 7px;
  z-index: 5;
`;

export const HeaderAllUserItem = styled(Row)`
  margin-bottom: 11px;
  cursor: pointer;

  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderLogoutButton = styled(Block)`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeaderSearchBar = styled(Block)`
  position: "relative";

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeaderSearchButton = styled.button`
  visibility: hidden;

  @media screen and (max-width: 480px) {
    visibility: visible;
  }
`;
