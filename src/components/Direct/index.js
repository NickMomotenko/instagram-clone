import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  DirectWrapp,
  DirectContent,
  DirectContentSidebar,
  DirectMessage,
  DirectMessageText,
} from "./styles";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Avatar from "../../UI/Avatar";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";

import Container from "../Container";
import Header from "../Header";

import { useInput } from "../../hooks/useInput";

import { ADD_MESSAGE } from "../../redux/direct/types";

const Direct = () => {
  const { messages } = useSelector((state) => state.direct);

  const {
    authUser: { user },
  } = useSelector((state) => state.authUser);

  const [activeChat, setActiveChat] = useState(messages[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const index = messages.indexOf(activeChat);
    setActiveIndex(index);
  }, [activeChat]);

  const sendInput = useInput();

  const dispatch = useDispatch();

  const onChatItemClick = (id) => {
    const searchableChat = messages.find((chat) => chat.id === id);

    if (!searchableChat) return;

    setActiveChat(searchableChat);
  };

  const handleSend = ({ chatId, text }) => {
    if (!text) return;

    dispatch({ type: ADD_MESSAGE, payload: { chatId, text } });
    sendInput.clearValue();
  };

  return (
    <DirectWrapp>
      <Header />
      <Container style={{ width: 1000 }}>
        <DirectContent>
          <Text text="Chats" style={{ fontSize: 25, marginBottom: 25 }} bold />
          <Row style={{ width: "100%" }}>
            <DirectContentSidebar as="ul" style={{ marginRight: 20 }}>
              {messages?.map(({ id, user, data }) => (
                <Row
                  key={id}
                  as="li"
                  onClick={() => onChatItemClick(id)}
                  style={{
                    marginBottom: 20,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    as="button"
                    url={user?.avatar}
                    fullname={user?.fullname}
                    size={40}
                    style={{ marginRight: 17, flexShrink: 0 }}
                  />
                  <Block
                    style={{ marginTop: -5, width: "100%", maxWidth: "75%" }}
                  >
                    <Text text={user?.fullname} bold />
                    <Row btw center>
                      <Text
                        text={data[data.length - 1]?.text}
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      />
                      <Text
                        text={data[data.length - 1]?.time}
                        color="#76777E"
                        style={{ fontSize: 10, fontWeight: 600, marginLeft: 9 }}
                      />
                    </Row>
                  </Block>
                </Row>
              ))}
            </DirectContentSidebar>
            <DirectContentSidebar style={{ maxWidth: "100%", flex: 1 }}>
              <Block>
                {messages[activeIndex]?.data.map(({ id, text, time, isMe }) => (
                  <DirectMessage key={id} position={isMe}>
                    <Block
                      style={{
                        marginRight: isMe === false && 15,
                        marginLeft: isMe ? 15 : 0,
                      }}
                    >
                      <Avatar
                        url={activeChat?.user?.avatar}
                        fullname={user?.fullname}
                        size={40}
                      />
                    </Block>
                    <DirectMessageText isMe={isMe}>
                      <Text text={text} color="#fff" />
                      <Text
                        text={time}
                        style={{ fontSize: 11, alignSelf: "flex-end" }}
                        color="#fff"
                      />
                    </DirectMessageText>
                  </DirectMessage>
                ))}
              </Block>
              <Block style={{ marginTop: 20 }}>
                <Row>
                  <Input
                    value={sendInput.value}
                    onChange={sendInput.onChange}
                    placeholder="Your message"
                    noError
                    style={{ flex: 1 }}
                  />
                  <DefaultButton
                    text="Send"
                    onClick={() =>
                      handleSend({
                        chatId: activeChat?.id,
                        text: sendInput.value,
                      })
                    }
                    style={{ marginLeft: 21 }}
                  />
                </Row>
              </Block>
            </DirectContentSidebar>
          </Row>
        </DirectContent>
      </Container>
    </DirectWrapp>
  );
};

export default Direct;
