import React from "react";

export const useForm = (functionAfterSubmit) => {
  // const [isSubmited, setIsSubmited] = React.useState(false);

  const handleSubmit = (e, fields) => {
    e.preventDefault();

    const isFormSubmited = fields.filter((field) => !field.isValidity);

    if (!isFormSubmited.length) {
      functionAfterSubmit(fields);
    } else {
      const currentInput = isFormSubmited[0];

      currentInput?.ref?.current.focus();
    }
  };

  return { handleSubmit };
};
