import { messagesDb } from "../../context/mockData";

import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  CHANGE_MESSAGE,
  SET_ACTIVE_CHAT,
} from "./types";

const initialState = {
  messages: messagesDb,
  activeChatIndex: 0,
  activeChat: messagesDb[0],
};

export const directReducer = (state = initialState, action) => {
  const { messages } = state;

  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, text } = action.payload;

      const searchableChat = messages.find((chat) => chat.id === chatId);
      const searchablePostIndex = messages.indexOf(searchableChat);

      if (!searchableChat) return;

      const newMessage = {
        id: Date.now().toString(),
        isMe: true,
        text,
        date: "26.12.2022",
        time: "17:38",
      };

      const updatedChatItem = {
        ...searchableChat,
        data: [...searchableChat.data, newMessage],
      };

      const updatedData = [...messages];

      updatedData.splice(searchablePostIndex, 1, updatedChatItem);

      return { ...state, messages: [...updatedData] };
    }

    case DELETE_MESSAGE: {
    }

    case CHANGE_MESSAGE: {
    }

    case SET_ACTIVE_CHAT: {
      return {
        ...state,
        activeChat: action.payload,
        activeChatIndex: state.messages.indexOf(action.payload),
      };
    }

    default:
      return state;
  }
};
