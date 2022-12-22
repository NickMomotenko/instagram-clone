import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };
  
  const [data, setData] = useState(getValue);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
