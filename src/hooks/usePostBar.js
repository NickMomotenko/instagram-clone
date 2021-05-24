import React, { useState } from "react";

export const usePostBar = () => {
  const [isActive, setIsActive] = useState(false);

  return { isActive, setIsActive };
};
