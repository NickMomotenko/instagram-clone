import styled from "styled-components";

import { PopupContent, PopupWrapp } from "../Popup/styles";

export const EditWrapp = styled(PopupWrapp)``;

export const EditGeneralWrapp = styled.div``;

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
