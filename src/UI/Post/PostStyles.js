import styled from "styled-components";

import Button from "../Button";
import { Row } from "../Layout";

export const PostWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 15px 5px;
  /* max-width: 300px; */
  width: 100%;

  display: inline-block;
  vertical-align: top;

  margin-bottom: 20px;

  position: relative;
  overflow: hidden;
`;

export const PostImage = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  max-width: 100%;
  border-radius: 15px;
  min-height: 180px;
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

export const PostLikedText = styled.div`
  font-size: 13px;
  color: #1b1d28;
  font-weight: 400;
`;
