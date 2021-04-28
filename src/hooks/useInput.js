import React, { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFocus = (e) => {
    console.log(e.target);
  };

  return { value, onChange, onFocus };
};
