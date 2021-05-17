import React, { useState } from "react";

import styled from "styled-components";

import { useSwipeable } from "react-swipeable";

import { Block, Row } from "../../UI/Layout";

const CustomSliderWrapp = styled.div`
  overflow: hidden;
`;

const CustomSliderItem = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  max-width: 100%;
  border-radius: 15px;
`;

const SliderButton = styled.button`
  display: inline-block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "blue" : "grey")};
  margin-right: 5px;
`;

const CustomSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const wrappRef = React.useRef(null);
  const listRef = React.useRef(null);

  const config = {
    delta: 1, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: true, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };

  const doTransition = (index) => {
    listRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  const changeActiveSlide = (index) => {
    setActiveIndex(index);
    doTransition(index);
  };

  let handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.deltaX > 0) {
        setActiveIndex((prev) => {
          if (prev === 0) return 0;
          doTransition(prev - 1);
          return prev - 1;
        });
      } else {
        setActiveIndex((prev) => {
          if (prev === slides.length - 1) {
            doTransition(prev);
            return prev;
          } else {
            doTransition(prev + 1);
            return prev + 1;
          }
        });
      }
    },
    ...config,
  });

  return (
    <CustomSliderWrapp ref={wrappRef} {...handlers}>
      <Row ref={listRef} style={{ transition: "transform .4s" }}>
        {slides.map((slide, index) => (
          <CustomSliderItem key={index} url={slide} {...handlers} />
        ))}
      </Row>
      <Row style={{ justifyContent: "center", marginTop: 10 }}>
        {slides.map((btn, index) => (
          <SliderButton
            key={index}
            active={index === activeIndex ? true : false}
            onClick={() => changeActiveSlide(index)}
          />
        ))}
      </Row>
    </CustomSliderWrapp>
  );
};

export default CustomSlider;
