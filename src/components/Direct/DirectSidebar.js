import React from "react";

import {
  DirectContentSidebar,
  DirectSidebarList,
  DirectSidebarItem,
} from "./styles";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import Avatar from "../../UI/Avatar";

import { useClickOutside } from "../../hooks/useClickOutside";

const DirectSidebar = React.forwardRef(
  (
    {
      messages,
      activeChat,
      onChatItemClick,
      setIsGeneralChatActive,
      isGeneralChatActive,
    },
    ref
  ) => {
    return (
      <DirectContentSidebar isGeneralChatActive={isGeneralChatActive}>
        <DirectSidebarList>
          {messages?.map(({ id, user, data }) => (
            <DirectSidebarItem
              key={id}
              onClick={() => onChatItemClick(id)}
              isActiveChat={activeChat?.id === id}
            >
              <Avatar
                as="button"
                url={user?.avatar}
                fullname={user?.fullname}
                size={40}
                style={{ marginRight: 17, flexShrink: 0 }}
              />
              <Block style={{ marginTop: -5, width: "100%", maxWidth: "75%" }}>
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
                    color="#2b2d3c"
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      marginLeft: 9,
                    }}
                  />
                </Row>
              </Block>
            </DirectSidebarItem>
          ))}
        </DirectSidebarList>
      </DirectContentSidebar>
    );
  }
);
export default DirectSidebar;
