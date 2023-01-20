import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const NavigationWrapp = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      display: flex !important;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      background: #fff;

      ${NavigationList} {
        flex-direction: column;
      }

      ${NavigationItem} {
        margin-right: 0;
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      ${NavigationLink} {
        font-size: 20px;
      }
    `}
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationLink = styled(Link)`
  color: black;
`;

export const NavigationItem = styled.li`
  margin-right: 23px;

  &:last-child {
    margin-right: 0;
  }

  ${NavigationLink} {
    ${(props) =>
      props.isLogoutButton &&
      css`
        border: 1px solid black;
        padding: 5px;
      `}
  }
`;
