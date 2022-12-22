import styled, { css } from "styled-components";

export const DirectWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

export const DirectContent = styled.div``;

export const DirectContentSidebar = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 10px 40px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 15px 5px;
  padding: 15px;
  max-width: 280px;
  min-width: 280px;

  height: 100%;
`;

export const DirectMessage = styled.div`
  margin-bottom: 15px;
  display: flex;

  ${(props) =>
    props.position
      ? css`
          justify-content: flex-start;
          flex-direction: row-reverse;
        `
      : ""}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DirectMessageText = styled.div`
  max-width: 300px;
  min-width: 300px;
  background-color: #a897f7;
  padding: 10px;
  border-radius: 0 10px 10px 10px;

  display: flex;
  flex-direction: column;

  color: #fff;

  ${(props) =>
    props.isMe &&
    css`
      border-radius: 10px 0 10px 10px;
      text-align: right;
      background-color: #c6bbf6;
    `}
`;
