import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  DirectWrapp,
  DirectContent,
  DirectContentSidebar,
  DirectSidebarList,
  DirectSidebarItem,
  DirectMessage,
  DirectMessageText,
  DirectBottomBar,
  DirectBodyContent,
  AllChatButton,
} from "./styles";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Avatar from "../../UI/Avatar";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";

import Container from "../Container";
import Header from "../Header";

import { useInput } from "../../hooks/useInput";
import { useClickOutside } from "../../hooks/useClickOutside";

import { ADD_MESSAGE, SET_ACTIVE_CHAT } from "../../redux/direct/types";
import { useWindowResize } from "../../hooks/useWindowResize";
import DirectSidebar from "./DirectSidebar";

const Direct = () => {
  const { messages, activeChatIndex, activeChat } = useSelector(
    (state) => state.direct
  );
  const {
    authUser: { user },
  } = useSelector((state) => state.authUser);

  const [isGeneralChatActive, setIsGeneralChatActive] = useState(false);

  const messagesBodyRef = React.useRef(null);

  const isTabletWidth = useWindowResize() <= 768;

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    normalizeDirectContentBodyScroll();
  }, []);

  React.useEffect(() => {
    normalizeDirectContentBodyScroll();
  }, [messages, activeChat]);

  const sendInput = useInput({ initialValue: "" });

  const dispatch = useDispatch();

  const onChatItemClick = (id) => {
    const searchableChat = messages.find((chat) => chat.id === id);

    if (!searchableChat) return;

    dispatch({ type: SET_ACTIVE_CHAT, payload: searchableChat });

    if (isTabletWidth && isGeneralChatActive) setIsGeneralChatActive(false);
  };

  const handleSend = (text) => {
    if (!text) return;

    dispatch({ type: ADD_MESSAGE, payload: { chatId: activeChat?.id, text } });
    sendInput.clearValue();
  };

  const sendInputOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSend(sendInput?.value);
    }
  };

  function normalizeDirectContentBodyScroll() {
    messagesBodyRef?.current.scrollTo(
      0,
      messagesBodyRef?.current?.scrollHeight
    );
  }

  return (
    <DirectWrapp>
      <Header />
      <Container style={{ width: 1000 }}>
        <DirectContent>
          <Row center btw style={{ marginBottom: 25 }}>
            <Text text="Chats" style={{ fontSize: 25 }} bold />
            <AllChatButton
              text="All chats"
              onClick={() => setIsGeneralChatActive(!isGeneralChatActive)}
            />
          </Row>
          <Row style={{ width: "100%", position: "relative" }}>
            <DirectSidebar
              messages={messages}
              activeChat={activeChat}
              onChatItemClick={onChatItemClick}
              setIsGeneralChatActive={setIsGeneralChatActive}
              isGeneralChatActive={isGeneralChatActive}
            />
            <DirectBodyContent
              ref={messagesBodyRef}
              isGeneralChatActive={isGeneralChatActive}
            >
              <Block as="ul" style={{ padding: 15 }}>
                {messages[activeChatIndex]?.data.map(
                  ({ id, text, time, isMe }) => (
                    <DirectMessage key={id} as="li" position={isMe}>
                      <Block
                        style={{
                          marginRight: isMe === false && 15,
                          marginLeft: isMe ? 15 : 0,
                        }}
                      >
                        <Avatar
                          url={isMe ? user?.avatar : activeChat?.user?.avatar}
                          fullname={
                            isMe ? user?.fullname : activeChat?.user?.fullname
                          }
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
                  )
                )}
              </Block>
              <DirectBottomBar>
                <Row>
                  <Input
                    value={sendInput?.value}
                    onChange={sendInput?.onChange}
                    onKeyDown={sendInputOnKeyDown}
                    placeholder="Your message"
                    noError
                    style={{ flex: 1 }}
                  />
                  <DefaultButton
                    text="Send"
                    onClick={() => handleSend(sendInput?.value)}
                    style={{ marginLeft: 21 }}
                  />
                </Row>
              </DirectBottomBar>
            </DirectBodyContent>
          </Row>
        </DirectContent>
      </Container>
    </DirectWrapp>
  );
};

export default Direct;
