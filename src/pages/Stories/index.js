import React, { useState } from "react";

import styled, { css, keyframes } from "styled-components";

import Button from "../../UI/Button";
import { Block, Row } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";

import { useInput } from "../../hooks/useInput";

import { data } from "./data";
import DefaultButton from "../../UI/DefaultButton";

const StoriesWrapp = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoriesList = styled(Row)``;

const StoriesItem = styled.div`
  display: inline-block;
  width: 450px;
  height: 800px;
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 20px 13px;
  border-radius: 30px;

  position: relative;
  flex-shrink: 0;
`;

const StoriesItemHeader = styled.header``;

const StoriesLine = styled.div`
  height: 2px;
  margin-right: 2px;
  width: ${(props) => `calc(100% / ${props.count})`};
  border-radius: 2px;
  position: relative;
`;

const StoriesLineDown = styled.div`
  background: rgba(255, 255, 255, 0.35);
  height: 100%;
  width: 100%;
`;

// const test = keyframes`
//   from {
//     width:0%
//   }

//   to {
//     width:100%
//   }
// `;

const StoriesLineUp = styled.div`
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const StoriesBottomBar = styled(Row)`
  position: absolute;
  bottom: 20px;
  left: 13px;
  right: 13px;
`;

const StoriesNoActive = styled(Block)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StoriesMain = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  flex: 1;
  margin-top: 10px;
`;

export const StoriesCommentBody = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 15px 5px;
  width: 325px;
  margin-left: 25px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StoriesCommentList = styled.div`
  flex: 1;
  /* overflow-y: scroll; */
`;

export const StoriesCommentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 5px #c2b9b9;
  border-radius: 8px;
  margin-bottom: 15px;
  min-height: 25%;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Stories = () => {
  const [active, setActive] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStorie, setActiveStorie] = useState(null);
  const [duration, setDuration] = useState(null);

  // React.useEffect(() => {
  //   if (activeIndex === active.stories.length) {
  //     setActive(data[1]);
  //     setActiveIndex(0);
  //   }
  //   setActiveStorie(
  //     active?.stories.find((item, index) => {
  //       if (index === activeIndex) {
  //         setDuration(item?.duration);

  //         return item;
  //       }
  //     })
  //   );
  // }, [activeIndex]);

  // React.useEffect(() => {
  //   if (duration) {
  //     setTimeout(() => {
  //       setActiveIndex(activeIndex + 1);
  //     }, duration * 1000);
  //   }
  // }, [duration]);

  let storiesInput = useInput();

  const changeActive = (item) => {
    setActive(item);
  };

  const goNext = () => {
    let length = active?.stories.length;

    if (activeIndex === --length) {
      setActiveIndex(activeIndex);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(-1);

      setTimeout(() => setActiveIndex(0), 0);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  

  return (
    <StoriesWrapp>
      <StoriesList>
        <StoriesItem>
          <Block
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <StoriesItemHeader>
              <Row>
                {active?.stories.map((storie, index) => {
                  return (
                    <StoriesLine key={storie.id} count={active?.stories.length}>
                      <StoriesLineDown />
                      <StoriesLineUp
                        index={index}
                        activeIndex={activeIndex}
                        timer={storie.duration}
                      />
                    </StoriesLine>
                  );
                })}
              </Row>
              <Row center btw style={{ marginTop: 15, padding: "0 5px" }}>
                <Row>
                  <Avatar size={18} />
                  <Text
                    text="nickname"
                    color="#fff"
                    style={{ marginLeft: 15 }}
                  />
                </Row>
                <Row>
                  <Button />
                </Row>
              </Row>
            </StoriesItemHeader>
            <StoriesMain url={activeStorie?.data} />
          </Block>
        </StoriesItem>
        <StoriesCommentBody>
          <Text
            text="Stories"
            bold
            style={{ fontSize: 20, marginBottom: 20 }}
          />
          <StoriesCommentList as="ul">
            {data?.map((storie) => {
              const { id } = storie;

              return (
                <StoriesCommentItem key={id} as="li">
                  <Block style={{ textAlign: "center" }}>
                    <Avatar size={30} />
                    <Text
                      text={`user-${id}`}
                      bold
                      style={{ fontSize: 15, marginTop: 7 }}
                    />
                  </Block>
                </StoriesCommentItem>
              );
            })}
          </StoriesCommentList>
        </StoriesCommentBody>
      </StoriesList>
    </StoriesWrapp>
  );
};

export default Stories;
