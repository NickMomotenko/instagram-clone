import React, { useState } from "react";

import { checkValueLength } from "../helpers/validate-input";

export const useInput = ({ initialValue = "", name = "test", option = {} }) => {
  const symbolLimit = option?.symbolLimit;
  const validityFunctions = option?.validityFunctions;

  const [value, setValue] = useState(initialValue ?? "");
  const [currentLimit, setCurrentLimit] = useState(symbolLimit);
  const [error, setError] = useState("");
  const [isValidity, setIsValidity] = useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (value) {
      symbolLimit && setCurrentLimit(symbolLimit - value?.length);
    }
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

  const onKeyDown = (e) => {
    console.log(e);
  }
 
  // function getFocus() {
  //   ref?.current.focus();
  // }

  const clearValue = () => setValue("");

  const refreshCurrentLimit = () => setCurrentLimit(symbolLimit);

  return {
    value,
    setValue,
    ref,
    name,
    currentLimit,
    symbolLimit,
    refreshCurrentLimit,
    error,
    setError,
    onChange,
    onFocus,
    onKeyDown,
    clearValue,
    checkValidity,
    isValidity,
  };
};
