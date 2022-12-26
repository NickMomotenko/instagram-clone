import styled from "styled-components";

import loginBg from "../../assets/bg/login-bg.png";

export const LoginWrapp = styled.div`
  background: url(${loginBg}) center no-repeat;

  background-size: cover;

  height: 100%;
  width: 100%;
`;

export const LoginFormWrapp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  box-shadow: 0 15px 20px #bcbcef;
  border-radius: 35px;
  display: inline-block;
  padding: 30px;
  width: 350px;
  max-width: 100%;

  @media screen and (max-width: 290px) {
    padding: 30px 15px;
  }
`;

export const DemoButton = styled.div`
  display: inline-block;
  background: #ffffff;
  box-shadow: 0 15px 20px #bcbcef;
  border-radius: 15px;
  position: fixed;
  bottom: 0;
  padding: 10px;
  margin: 0 0 10px 10px;
  max-width: 250px;
  text-align: center;
  z-index: 2;

  @media screen and (max-width: 480px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
  }

  @media screen and (max-width: 420px) {
    white-space: nowrap;
    padding: 0;
    border-radius: 5px;
    border: 1px solid #ffff;

    div {
      display: none;
    }
  }
`;
