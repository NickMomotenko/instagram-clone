import React from "react";

import styled, { css } from "styled-components";

import { Block } from "../Layout";
import Text from "../Text";

const TextOpenOrCloseWrapp = styled.div`
  font-size: 14px;
  color: #4f5160;
  font-weight: 600;

  ${(props) =>
    props.boolFlag === false &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

const TextOpenOrClose = ({
  text = "",
  boolFlag,
  buttonText,
  buttonTextColor,
  buttonClick,
  buttonPosition,
}) => {
  const textSybolLimit = 30;
  const isWithButton = text.length > textSybolLimit;

  return (
    <Block
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: !isWithButton ? 14 : 0,
      }}
    >
      <TextOpenOrCloseWrapp boolFlag={boolFlag}>{text}</TextOpenOrCloseWrapp>
      {isWithButton && (
        <Text
          as="button"
          text={buttonText}
          bold
          color={buttonTextColor}
          onClick={buttonClick}
          style={{ alignSelf: buttonPosition ? buttonPosition : "flex-end" }}
        />
      )}
    </Block>
  );
};

export default TextOpenOrClose;
