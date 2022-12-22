export const validateText = {
  valueLengthMoreThanThree: "Должен содержать более 3 символов",
  valueWithNoUpperCaseValue: "Не должен иметь заглавные буквы",
};

export const checkValueLength = (value, validateLength = 3) => {
  return {
    result: value.length > validateLength,
    errorText: validateText.valueLengthMoreThanThree,
  };
};

// export const isLength = (value) => (value.length === 0 ? true : false);

export const checkUpperCase = (value) => {
  return {
    // 'Test'.toLowerCase() === 'Test' => false
    // 'Test'.toLowerCase() === 'test' => true
    result: value.toLowerCase() === value,
    errorText: validateText.valueWithNoUpperCaseValue,
  };
};
