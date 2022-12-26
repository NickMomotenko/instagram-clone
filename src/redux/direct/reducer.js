import { messagesDb } from "../../context/mockData";

import {} from "./types";

const initialState = {
  messages: messagesDb,
};

export const directReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
