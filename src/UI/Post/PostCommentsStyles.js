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
`;

export const PostRow = styled(Row)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;
