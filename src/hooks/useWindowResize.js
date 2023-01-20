import React from "react";

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = React.useState(0);

  React.useEffect(() => {
    function handleSize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};
