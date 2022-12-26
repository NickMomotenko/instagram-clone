import { posts as postsData, authUser } from "../mockData";

import {
  LIKE_POST,
  DISLIKE_POST,
  SAVE_POST,
  CREATE_POST,
  ADD_COMMENT,
  CHANGE_COMMENT,
} from "./types";

// import { useDate } from "../../hooks/useDate";

// const { dayNumber, monthName, year, weekName } = useDate();

export const initialState = { posts: postsData };

export const postsReducer = (state = initialState, action) => {
  const { posts } = state;

  switch (action.type) {
    case LIKE_POST: {
      const { id } = action;

      const searchablePost = posts.find((post) => post.id === id);
      const searchablePostIndex = posts.indexOf(searchablePost);

      const updatedPost = {
        ...searchablePost,
        liked: [
          ...searchablePost.liked,
          {
            id: Date.now().toString(),
            user: authUser?.user,
          },
        ],
      };

      const updatedData = [...posts];

      updatedData.splice(searchablePostIndex, 1, updatedPost);

      return { ...state, posts: [...updatedData] };
    }

    case DISLIKE_POST: {
      const { id } = action;

      const searchablePost = posts.find((post) => post.id === id);
      const searchablePostIndex = posts.indexOf(searchablePost);

      const searchablePostLikedData = searchablePost?.liked;

      const searchablePostUpdatedLikesData = searchablePostLikedData.filter(
        (likeObj) => likeObj.user.id !== authUser.user.id
      );

      const updatedPost = {
        ...searchablePost,
        liked: [...searchablePostUpdatedLikesData],
      };

      const updatedData = [...posts];

      updatedData.splice(searchablePostIndex, 1, updatedPost);

      return { ...state, posts: [...updatedData] };
    }

    case SAVE_POST: {
      // const { id } = action;

      // const searchablePost = posts.find((post) => post.id === id);

      console.log(state);

      return state;
    }

    case CREATE_POST: {
      const { text } = action;

      const basePostExample = {
        id: Date.now().toString(),
        postType: "text",
        photo: [],
        comments: [],
        liked: [],
      };

      const updatedData = [
        {
          ...basePostExample,
          user: authUser.user,
          // date: `${weekName} , ${dayNumber} ${monthName} ${year}`,
          date: `Sunday , 25 January 2022`,
          text,
        },
        ...posts,
      ];

      return { ...state, posts: [...updatedData] };
    }

    case ADD_COMMENT: {
      const { id, text } = action.data;

      const searchablePost = posts.find((post) => post.id === id);
      const searchablePostIndex = posts.indexOf(searchablePost);

      const searchablePostComments = searchablePost.comments;

      const updatedPost = {
        ...searchablePost,
        comments: [
          ...searchablePostComments,
          { id: Date.now().toString(), user: authUser.user, text },
        ],
      };

      const updatedData = [...posts];

      updatedData.splice(searchablePostIndex, 1, updatedPost);

      return { ...state, posts: [...updatedData] };
    }

    case CHANGE_COMMENT: {
      const { updatedPost } = action;

      const searchablePost = posts.find((post) => post.id === updatedPost.id);
      const searchablePostIndex = posts.indexOf(searchablePost);

      const updatedData = [...posts];

      updatedData.splice(searchablePostIndex, 1, updatedPost);

      return { ...state, posts: [...updatedData] };
    }

    default:
      return state;
  }
};
