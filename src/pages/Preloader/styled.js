import styled, { css, keyframes } from "styled-components";

import Logo from "../../components/Logo";

export const PreloaderWrapp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    background: #f5f5dc;

    transition: 0.5s;
  }

  &:after {
    right: 0;
    left: auto;
  }

  ${(props) =>
    props.activeStatus &&
    css`
      pointer-events: none;

      &:before {
        left: -50%;
        transition-delay: 0.5s;
      }

      &:after {
        right: -50%;
        transition-delay: 0.5s;
      }

      ${PreloaderLogoBg} {
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;
      }
    `}
`;

const circleSize = 150;
const circleBoxShadowColor = "#444085";

const test = keyframes`
  0%{
    box-shadow: 0 0 0px ${circleBoxShadowColor};
  }

  100%{
    box-shadow: 0 0 60px ${circleBoxShadowColor};
  }
`;

export const PreloaderLogoBg = styled.div`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${circleSize}px;
  width: ${circleSize}px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0px ${circleBoxShadowColor};
  animation: ${test} 1.5s linear forwards infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background-image: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }

  &:after {
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background: #fff;
  }
`;

export const PreloaderContent = styled.div`
  position: relative;
  z-index: 3;
`;

export const PreloaderLogo = styled(Logo)``;
