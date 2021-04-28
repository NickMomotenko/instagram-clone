import React from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import { useText } from "../../hooks/useText";

import { withData } from "../../context/data";

import SideBar from "../../components/SideBar";

import { Block, Row } from "../../UI/Layout";
import Post from "../../UI/Post";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";
import TextOpenOrClose from "../../UI/TextOpenOrClose";

const MainWrapp = styled.div``;

const MainList = styled.ul`
  width: 1000px;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(
    99.27deg,
    #ff1cf6 -35.3%,
    rgba(253, 96, 28, 0.74) 66.33%,
    #de2442 138.45%
  );
  border-radius: 5px;
  padding: 15px 111px;

  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  z-index: 2;

  max-width: 300px;
  /* max-height: 48px; */

  &:after {
    content: "";
    display: inline-block;
    width: 244px;
    height: 40px;

    background: linear-gradient(
      99.27deg,
      #ff1cf6 -35.3%,
      rgba(253, 96, 28, 0.74) 66.33%,
      #de2442 138.45%
    );
    filter: blur(20px);
    border-radius: 5px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;

    z-index: -1;
  }
`;

const DefaultButton = styled(Button)`
  padding: 7px 27px;
  background-color: #000000;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const Main = React.memo((props) => {
  const userText = useText();

  let { posts } = props;

  let {
    userData: { user, stories },
  } = props;

  return (
    <MainWrapp>
      <Row>
        <MainList>
          {posts?.map((post) => (
            <Post as="li" key={post.id} {...post} />
          ))}
        </MainList>
        <SideBar style={{ textAlign: "center", paddingTop: 120 }}>
          <Block style={{ marginBottom: 12 }}>
            <Avatar
              size={90}
              as="button"
              url={user?.avatar}
              style={{ marginBottom: 16 }}
            />
            <Text
              text={user?.nickname}
              bold
              style={{ fontSize: 20, marginBottom: 5 }}
            />
            <Text text={user?.doing} color="#76777E" />
          </Block>
          <DefaultButton text="Edit" />
          <Block style={{ textAlign: "left" }}>
            <Text
              text={user?.fullname}
              bold
              style={{ fontSize: 16, marginBottom: 12 }}
            />
            <TextOpenOrClose
              text={user?.description}
              boolFlag={userText.isOpen}
              buttonText={userText.isOpen ? "(Close)" : "(Read More)"}
              buttonTextColor="#76777e"
              buttonClick={() => userText.setIsOpen(!userText.isOpen)}
              buttonPosition="flex-start"
            />
            {user?.links.map((link) => (
              <Text
                key={link.id}
                text={link.title}
                as="a"
                target="_blank"
                href={link.link}
                color="#338DF7"
                bold
                style={{ fontSize: 16, display: "inline-block" }}
              />
            ))}
          </Block>
          <Block style={{ margin: "45px 0", textAlign: "left" }}>
            <Text
              text="Your stories"
              bold
              style={{ fontSize: "16px", marginBottom: 25 }}
            />
            <Row as="ul">
              {stories?.map((storie) => (
                <Block
                  key={storie.id}
                  as="li"
                  style={{ width: `25%`, textAlign: "center" }}
                >
                  <Avatar as="button" size={60} noGradient url={storie.image} />
                  <Text text={storie.title} bold style={{ fontSize: "12px" }} />
                </Block>
              ))}
            </Row>
          </Block>
          <GradientButton text="Create post" />
        </SideBar>
      </Row>
    </MainWrapp>
  );
});

export default withData(Main);
