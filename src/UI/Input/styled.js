import styled from "styled-components";

export const InputWrapp = styled.label`
  display: block;
`;

export const InputChanger = styled.input`
  font-size: 15px;
  color: #afc1d9;
  width: 100%;
  background-color: transparent;

  background: #f8fbff;
  box-shadow: inset 0px 4px 40px rgba(175, 193, 217, 0.12);
  border-radius: 8px;
  max-height: 48px;

  padding: 12px 15px;
  position: relative;

  display: block;

  &::placeholder {
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    color: #afc1d9;
  }

  &:focus {
    border-bottom-color: red;
  }
`;

export const InputLabel = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;
