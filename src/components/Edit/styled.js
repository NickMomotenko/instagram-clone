import styled from "styled-components";
import { Row, Block } from "../../UI/Layout";
import { PopupContent, PopupWrapp } from "../Popup/styles";

export const EditWrapp = styled(PopupWrapp)``;

export const EditGeneralWrapp = styled.div``;

export const EditGeneralContent = styled(Row)`
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const EditGeneralAvatar = styled(Block)`
  text-align: center;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 15px;
  }
`;

export const EditGeneralInputs = styled(Block)`
  flex: 1;
  margin-left: 30px;

  @media screen and (max-width: 550px) {
    margin-left: 0;
  }
`;

export const EditGeneralButtons = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-bottom: 25px;
  background: #fff;

  @media screen and (max-width: 480px) {
    display: flex;
    position: sticky;
    bottom: 0;

    button {
      flex: 1;
    }
  }

  @media screen and (max-width: 350px) {
    flex-direction: column;

    button {
      margin-right: 0 !important;

      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

export const EditContent = styled(PopupContent)`
  @media screen and (max-width: 768px) {
    margin: 0 3%;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const EditOptions = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditOptionsItem = styled.div`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const EditMain = styled.div``;

export const EditMore = styled.div`
  text-align: center;
`;

export const EditHeader = styled.div`
  position: sticky;
  top: 0px;
  z-index: 4;
  background: rgb(255, 255, 255);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e7dfdf;
  padding-top: 25px;
`;

export const EditExitButton = styled.button``;

export const EditExitIcon = styled.img`
  display: inline-block;

  height: 15px;
  width: 15px;
`;
