import React, { useState } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

import { useText } from "../../hooks/useText";

import { withData } from "../../context/data";

import SideBar from "../../components/SideBar";

import { Block, Paper, Row } from "../../UI/Layout";
import Post from "../../UI/Post";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";
import TextOpenOrClose from "../../UI/TextOpenOrClose";
import DefaultButton from "../../UI/DefaultButton";
import Icon from "../../UI/Icon";
import Input from "../../UI/Input";

import { useInput } from "../../hooks/useInput";

import send from "../../assets/icons/send-1.svg";
import bell from "../../assets/icons/bell.svg";
import Textarea from "../../UI/Textarea";

const MainWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const MainList = styled.ul`
  width: 100%;
  background-color: #fcfcfd;
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

const ButtonWithLink = styled(Link)``;

const MainPopup = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;

  padding: 20px;
`;

const Main = React.memo((props) => {
  const [notifications, setNotifications] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (notifications) setNotifications(false);
    });

    return () => {
      document.removeEventListener("click", (e) => {
        if (notifications) setNotifications(false);
      });
    };
  });

  const userText = useText();

  let { posts } = props;

  let {
    userData: { user, stories },
  } = props;

  const postData = useInput();

  return (
    <MainWrapp>
      <Row>
        <MainList>
          {posts?.map((post) => (
            <Post as="li" key={post.id} post={post} />
          ))}
        </MainList>
        <SideBar style={{ textAlign: "center" }}>
          <Row center btw style={{ marginBottom: 60 }}>
            <Block style={{ position: "relative" }}>
              <Button
                icon={bell}
                onClick={(e) => {
                  e.stopPropagation();
                  setNotifications(!notifications);
                }}
              />
              {notifications ? (
                <Paper style={{ position: "absolute" }}>
                  <Text
                    text="No notifications ..."
                    style={{ whiteSpace: "nowrap" }}
                  />
                </Paper>
              ) : (
                <></>
              )}
            </Block>
            <Block>
              <ButtonWithLink to="/direct">
                <Icon url={send} />
              </ButtonWithLink>
            </Block>
          </Row>
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
          <GradientButton text="Create post" onClick={() => setCreatePost(true)} />
        </SideBar>
      </Row>

      {createPost ? (
        <MainPopup style={{ zIndex: 10 }}>
          <Row style={{ padding: "0 15px" }} center>
            <Block style={{ marginRight: 11 }}>
              <Avatar as="button" url={user.avatar} size={40} />
            </Block>
            <Block>
              <Text text={user.fullname} bold />
            </Block>
          </Row>
          <Block>
            <Textarea
              value={postData.value}
              onChange={postData.onChange}
              placeholder="post text"
              style={{ marginTop: 20 }}
            />
            <Row
              as="button"
              style={{
                height: 50,
                width: "100%",
                background: "#e3eefb",
                justifyContent: "center",
                marginTop: 25,
              }}
              center
            >
              <Text text="Add image or video" color="#673b3b" />
            </Row>
            <Row style={{ marginTop: 20 }}>
              <DefaultButton
                text="Create"
                fullWidth
                bgColor="#0095f6"
                style={{ marginRight: 20 }}
                onClick={() => setCreatePost(true)}
              />
              <DefaultButton
                text="Cancel"
                fullWidth
                bgColor="#58a0cf"
                onClick={() => setCreatePost(false)}
              />
            </Row>
          </Block>
        </MainPopup>
      ) : (
        <></>
      )}
    </MainWrapp>
  );
});

export default withData(Main);
