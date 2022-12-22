import React from "react";

export const useClickOutside = (func) => {
  const testRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsidePost);

    return () => {
      document.removeEventListener("click", handleClickOutsidePost);
    };
  }, []);

  const handleClickOutsidePost = (e) => {
    if (testRef?.current?.contains(e.target)) {
      return;
    } else {
      func();
    }
  };

  return { testRef , handleClickOutsidePost };
};
