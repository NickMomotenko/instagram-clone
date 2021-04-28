import React from "react";

import styled, { css } from "styled-components";

import { Block } from "../Layout";
import Text from "../Text";

const TextOpenOrCloseWrapp = styled(Text)`
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
  return (
    <Block style={{ display: "flex", flexDirection: "column" }}>
      <TextOpenOrCloseWrapp
        text={text}
        boolFlag={boolFlag}
        bold
        color="#4f5160"
      />
      <Text
        as="button"
        text={buttonText}
        bold
        color={buttonTextColor}
        onClick={buttonClick}
        style={{ alignSelf: buttonPosition ? buttonPosition : "flex-end" }}
      />
    </Block>
  );
};

export default TextOpenOrClose;
