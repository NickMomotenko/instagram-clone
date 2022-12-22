import React, { useState } from "react";

import { v4 as uuid } from "uuid";

export const DirectContext = React.createContext();

export const DirectProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: uuid(),
      user: {
        id: uuid(),
        fullname: "Annet Black",
        avatar: "",
      },
      data: [
        {
          id: uuid(),
          isMe: false,
          text: "Test text 1",
          date: "24.05.2021",
          time: "19:17",
        },
        {
          id: uuid(),
          isMe: true,
          text: "Test text 2 Ffaf fafar fff faqfafa",
          date: "24.05.2021",
          time: "19:18",
        },
      ],
    },
    {
      id: uuid(),
      user: {
        id: uuid(),
        fullname: "Annet Black2",
        avatar: "",
      },
      data: [
        {
          id: uuid(),
          isMe: false,
          text: "Test text 1",
          date: "24.05.2021",
          time: "19:17",
        },
        {
          id: uuid(),
          isMe: true,
          text: "Test text 2",
          date: "24.05.2021",
          time: "19:18",
        },
      ],
    },
    {
      id: uuid(),
      user: {
        id: uuid(),
        fullname: "Annet Black3",
        avatar: "",
      },
      data: [
        {
          id: uuid(),
          isMe: false,
          text: "Test text 1",
          date: "24.05.2021",
          time: "19:17",
        },
        {
          id: uuid(),
          isMe: true,
          text: "Test text 2",
          date: "24.05.2021",
          time: "19:18",
        },
      ],
    },
    {
      id: uuid(),
      user: {
        id: uuid(),
        fullname: "Annet Black5",
        avatar: "",
      },
      data: [
        {
          id: uuid(),
          isMe: false,
          text: "Test text 1",
          date: "24.05.2021",
          time: "19:17",
        },
        {
          id: uuid(),
          isMe: true,
          text: "Test text 2",
          date: "24.05.2021",
          time: "19:18",
        },
      ],
    },
    {
      id: uuid(),
      user: {
        id: uuid(),
        fullname: "Annet Black5",
        avatar: "",
      },
      data: [
        {
          id: uuid(),
          isMe: false,
          text: "Test text 1",
          date: "24.05.2021",
          time: "19:17",
        },
        {
          id: uuid(),
          isMe: true,
          text: "Test text 2",
          date: "24.05.2021",
          time: "19:18",
        },
      ],
    },
  ]);

  return (
    <DirectContext.Provider value={{ messages }}>
      {children}
    </DirectContext.Provider>
  );
};

export const withDirect = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DirectContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DirectContext.Consumer>
      );
    }
  };
};
