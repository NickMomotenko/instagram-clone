import styled from "styled-components";

import { Row } from "../Layout";

export const PostCommentsWrapp = styled.div`
  position: absolute;
  left: ${(props) => (props.active ? "0" : "-100%")};
  top: 0;
  opacity: ${(props) => (props.active ? "1" : "0")};

  z-index: 20;
  transition: left 0.4s, right 0.4s, opacity 0.6s;

  height: 100%;
  width: 100%;
  padding: 30px 20px 15px;
  background-color: #221818de;

  display: flex;
  flex-direction: column;
`;

export const PostRow = styled.div`
  margin-bottom: 15px;
  display:flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostCommentsContent = styled.div`
  flex: 1;
`;

export const PostCommentsBottom = styled.div``;
