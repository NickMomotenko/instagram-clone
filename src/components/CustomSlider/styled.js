import styled from "styled-components";

export const CustomSliderWrapp = styled.div`
  overflow: hidden;
  width: 100%;
`;

// export const CustomSliderItem = styled.img.attrs(({ url }) => ({
//   src: url,
// }))`
//   display: block;
//   min-width: 100%;
//   border-radius: 15px;
//   height: 100px;
//   background: black;
// `;

export const CustomSliderItem = styled.div`
  min-width: 100%;
  border-radius: 15px;
  height: 180px;
  background: black;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 32px;
`;

const btnSize = 6;

export const SliderButton = styled.button`
  display: inline-block;
  height: ${btnSize}px;
  width: ${btnSize}px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "blue" : "grey")};
  margin-right: 5px;
`;
