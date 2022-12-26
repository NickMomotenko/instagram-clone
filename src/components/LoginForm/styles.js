import styled from "styled-components";

import Text from "../../UI/Text";
import { Row, Block } from "../../UI/Layout";
import { FormWrapp } from "../../UI/Form";

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
