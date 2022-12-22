import React, { useState } from "react";

export const useText = () => {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
};
