import styled from "styled-components";

import Text from "../../UI/Text";
import { Row, Block } from "../../UI/Layout";
import { FormWrapp } from "../../UI/Form";

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

export const LoginTextWithLine = styled(Text)`
  display: inline-block;
  margin: 0 18px;
`;

export const LoginRow = styled(Row)`
  justify-content: center;
  margin-top: 4px;
`;

export const Div = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background-color: #dbdbdb;
  height: 0.5px;
`;

export const LogoBlock = styled(Block)`
  text-align: center;
  margin-bottom: 20px;

  a {
    margin-right: 0;
  }
`;

export const StepperWrapp = styled.div`
  overflow: hidden;
`;

export const StepperContent = styled.div`
  display: flex;
  transition: transform 0.4s;
`;

export const StepperItem = styled(Block)`
  width: 100%;
  flex-shrink: 0;
`;

export const CreateNewAccountForm = styled(FormWrapp)`
  @media screen and (max-height: 700px) {
    max-height: 65vh;
  }
`;
