import styled from "styled-components";

import Text from "../../UI/Text";
import { Row } from "../../UI/Layout";

export const LoginFormWrapp = styled.form`
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
`;

export const LoginTextWithLine = styled(Text)`
  display: inline-block;
  margin: 0 18px;
`;

export const LoginRow = styled(Row)`
  justify-content: center;
  margin-top: 18px;
`;

export const Div = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background-color: #dbdbdb;
  height: 0.5px;
`;
