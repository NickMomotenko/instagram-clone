import styled from "styled-components";
import { Paper } from "../../UI/Layout";

export const PopupWrapp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  z-index: 15;

  visibility: ${({ active }) => (active ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;

    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(500px);
    background: #ff000059;
  }
`;

export const PopupContent = styled(Paper)`
  width: 500px;
  position: relative;

  box-shadow: 0 0 5px #fff;
  padding: 25px;
`;
