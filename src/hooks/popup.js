import React from "react";

export const usePopup = () => {
  const [isActive, setIsActive] = useState(false);

  return { isActive, setIsActive };
};
