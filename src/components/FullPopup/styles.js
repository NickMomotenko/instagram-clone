import styled from "styled-components";

export const FullPopupWrapp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  z-index: 15;

  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

export const FullPopupContent = styled.div``;
