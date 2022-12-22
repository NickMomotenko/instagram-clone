import styled, { css } from "styled-components";

export const BurgerLine = styled.div`
  height: 2px;
  background: black;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 0 0;

  transition: 0.4s;

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    top: auto;
    bottom: 0;
  }
`;

export const BurgerWrapp = styled.button`
  display:none;
  height: 18px;
  width: 25px;
  position: relative;
  z-index:10;

  ${BurgerLine} {
    ${({ isActive }) =>
      isActive &&
      css`
        &:nth-child(1) {
          transform: rotate(45deg) translate(2px, -3px);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate(0px, 2px);
        }
      `}
  }

  @media screen and (max-width:768px){
    display:inline-block;
  }
`;
