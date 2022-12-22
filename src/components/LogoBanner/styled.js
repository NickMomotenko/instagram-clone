import styled, { css } from "styled-components";
import Text from "../../UI/Text";

export const LogoBannerWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0 15px 20px #bcbcef;
  border-radius: 0 0 35px 35px;
  display: inline-block;
  padding: 30px;
  width: 450px;
  position: fixed;
  left: 310px;
  top: 0;
  max-width: 219px;

  opacity: 0;
  top: -100%;

  transition: opacity, top 0.5s;
  transition-delay: .7s;

  ${(props) =>
    props.active === true &&
    css`
      opacity: 1;
      top: 0;
    `}

  @media screen and (max-width:1400px) {
    left: 50px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 190px;
    padding: 15px;
    border-radius: 0 0 15px 15px;

    a {
      width: 28px;
      overflow: hidden;
      flex-shrink: 0;
    }

    div {
      font-size: 14px !important;
      margin-top: 0 !important;
    }
  }

  @media screen and (max-width: 480px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
