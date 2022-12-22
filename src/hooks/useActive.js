import React, { useState } from "react";

export const useActive = () => {
  const [isActive, setIsActive] = useState(false);

  return { isActive, setIsActive };
};
