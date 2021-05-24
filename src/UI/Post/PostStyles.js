import styled from "styled-components";

import Button from "../Button";
import { Row } from "../Layout";

export const PostWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 10px 40px rgba(222, 230, 237, 0.4);
  border-radius: 30px;
  padding: 15px 5px;
  max-width: 300px;

  display: inline-block;
  vertical-align: top;

  margin-right: 25px;
  margin-bottom: 20px;

  position: relative;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
`;

export const PostImage = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  max-width: 100%;
  border-radius: 15px;
`;

export const PostRow = styled(Row)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostButton = styled(Button)`
  margin-right: 9px;

  &:last-child {
    margin-right: 0;
  }
`;
