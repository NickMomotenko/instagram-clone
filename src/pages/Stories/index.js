import React, { useState } from "react";

import styled, { css, keyframes } from "styled-components";

import Button from "../../UI/Button";
import { Block, Row } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";

import { useInput } from "../../hooks/useInput";

import next from "../../assets/icons/next.svg";

const StoriesWrapp = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoriesList = styled(Row)`
  overflow-x: hidden;
`;

const StoriesItem = styled.div`
  display: inline-block;
  width: 450px;
  height: 800px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 20px 13px;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.2s;

  ${({ activeStatus }) =>
    activeStatus
      ? css`
          transform: scale(1);
          margin: 0 40px;
        `
      : css`
          transform: scale(0.4);
          cursor: pointer;
        `};
`;

const StoriesControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  height: 20px;
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

const test = keyframes`
  from {
    width:0%
  }

  to {
    width:100%
  }
`;

const StoriesLineUp = styled.div`
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  ${({ activeIndex, index, timer }) =>
    activeIndex === index &&
    css`
      animation: ${test} ${timer}s linear forwards;
    `}
  width: ${({ activeIndex, index }) => (activeIndex > index ? "100%" : "0")};
`;

const StoriesButtonControl = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
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

const data = [
  {
    id: 1,
    title: "",
    stories: [
      {
        id: 1,
        duration: 2,
        data: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      },
      {
        id: 2,
        duration: 3,
        data: "https://images.unsplash.com/photo-1610023050964-dead08b285a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
      {
        id: 3,
        duration: 4,
        data: "https://images.unsplash.com/photo-1582554234327-81cf83c36141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "",
    stories: [
      {
        id: 1,
        duration: 2,
        data: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
      },
      {
        id: 2,
        duration: 2,
        data: "https://images.unsplash.com/photo-1610023050964-dead08b285a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
    ],
  },
];

const Stories = () => {
  const [active, setActive] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStorie, setActiveStorie] = useState(null);
  const [duration, setDuration] = useState(null);

  React.useEffect(() => {
    if (activeIndex === active.stories.length) {
      setActive(data[1]);
      setActiveIndex(0);
    }
    setActiveStorie(
      active?.stories.find((item, index) => {
        if (index === activeIndex) {
          setDuration(item?.duration);

          return item;
        }
      })
    );
  }, [activeIndex]);

  React.useEffect(() => {
    if (duration) {
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, duration * 1000);
    }
  }, [duration]);

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
        {data.map((item) => (
          <StoriesItem
            key={item.id}
            activeStatus={item.id === active.id ? true : false}
            onClick={() => changeActive(item)}
          >
            {item.id === active.id ? (
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
                        <StoriesLine
                          key={storie.id}
                          count={active?.stories.length}
                        >
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
                <StoriesBottomBar>
                  <Textarea
                    value={storiesInput.value}
                    onChange={storiesInput.onChange}
                    transparent
                  />
                  <Text text="send" as="button" color="#fff" />
                </StoriesBottomBar>
                <StoriesControls>
                  <StoriesButtonControl
                    icon={next}
                    style={{
                      left: -30,
                      transform: "rotate(180deg)",
                      top: -3,
                    }}
                    onClick={() => goPrev()}
                  />
                  <StoriesButtonControl
                    icon={next}
                    style={{ left: "auto", right: -30 }}
                    onClick={() => goNext()}
                  />
                </StoriesControls>
              </Block>
            ) : (
              <StoriesNoActive>
                <Avatar size={100} />
                <Text
                  text="nickname"
                  color="#fff"
                  style={{ fontSize: 32, marginTop: 15 }}
                />
              </StoriesNoActive>
            )}
          </StoriesItem>
        ))}
      </StoriesList>
    </StoriesWrapp>
  );
};

export default Stories;
