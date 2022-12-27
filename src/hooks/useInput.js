import React, { useState } from "react";

import { checkValueLength } from "../helpers/validate-input";

export const useInput = (val = {}) => {
  const { option, validityFunctions } = val;
  const symbolLimit = option?.symbolLimit;

  const [value, setValue] = useState("");
  const [currentLimit, setCurrentLimit] = useState(symbolLimit);
  const [error, setError] = useState("");
  const [isValidity, setIsValidity] = useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {
    symbolLimit && setCurrentLimit(symbolLimit - value.length);
  }, [value]);

  const onChange = (e) => setValue(e.target.value);

  const checkValidity = () => {
    const baseValidityFunctions = [checkValueLength];

    for (const func of validityFunctions
      ? validityFunctions
      : baseValidityFunctions) {
      let validity = func(value);

      if (!validity.result) {
        setIsValidity(false);
        setError(validity.errorText);
        break;
      } else {
        setIsValidity(true);
        setError("");
      }
    }
  };

  const onFocus = () => {};

  // function getFocus() {
  //   ref?.current.focus();
  // }

  const clearValue = () => setValue("");

  return {
    value,
    setValue,
    ref,
    currentLimit,
    symbolLimit,
    error,
    setError,
    onChange,
    onFocus,
    clearValue,
    checkValidity,
    isValidity,
  };
};
