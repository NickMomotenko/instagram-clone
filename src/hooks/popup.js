import React from "react";

export const usePopup = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return { isActive, setIsActive };
};
