import React from "react";

import { TextareaBody, TextareaWrapp, TextareaLimitCounter } from "./styled";

const Textarea = (props) => {
  const { currentLimit } = props;

  return (
    <TextareaBody>
      <TextareaWrapp {...props}></TextareaWrapp>
      {currentLimit && (
        <TextareaLimitCounter>{currentLimit}</TextareaLimitCounter>
      )}
    </TextareaBody>
  );
};

export default Textarea;
