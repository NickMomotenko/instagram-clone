import { posts as postsData, authUser } from "./mockData";

import { LIKE_POST, DISLIKE_POST } from "./types";

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

    default:
      return state;
  }
};
