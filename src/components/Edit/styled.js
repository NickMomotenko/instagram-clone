import styled from "styled-components";
import { Row } from "../../UI/Layout";
import { PopupContent, PopupWrapp } from "../Popup/styles";

export const EditWrapp = styled(PopupWrapp)``;

export const EditContent = styled(PopupContent)``;

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

export const EditButtons = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const EditMore = styled.div`
  text-align: center;
`;
