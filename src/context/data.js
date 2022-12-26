import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import { posts, authUser, allDbUsers } from "./mockData";

import { useDate } from "../hooks/useDate";

export const postActionNames = {
  CREATE_POST: "create",
  LIKE_POST: "like_post",
  SAVE_POST: "save_post",

  ADD_COMMENT: "add_comment",
  CHANGE_COMMENT: "change_comment",
};

export const basePostExample = {
  id: uuid(),
  postType: "text",
  photo: [],
  comments: [],
  liked: [],
};

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(authUser);
  const [globalData, setGlobalData] = useState(posts);
  const [allUsers, setAllUsers] = useState(allDbUsers);

  const { dayNumber, monthName, year, weekName } = useDate();

  const postAction = (action, data) => {
    switch (action) {
      case postActionNames.LIKE_POST:
        const { post, status } = data;

        if (status === "add") {
          const updatedPosts = globalData.map((globalPost) => {
            if (globalPost?.id === post?.id) {
              return {
                ...globalPost,
                liked: [
                  ...globalPost.liked,
                  { id: userData?.user?.id, user: userData?.user },
                ],
              };
            }

            return globalPost;
          });

          setGlobalData(updatedPosts);
        } else if (status === "remove") {
          const liked = post?.liked;

          const updatedLiked = liked.filter(
            (likedUser) => likedUser?.user?.id !== userData?.user?.id
          );

          const updatedPosts = globalData.map((globalPost) => {
            if (globalPost?.id === post?.id) {
              return { ...globalPost, liked: updatedLiked };
            }

            return globalPost;
          });

          setGlobalData(updatedPosts);
        }

        break;

      case postActionNames.SAVE_POST:
        const { post: addedPostToUserData } = data;

        if (data.status === "add") {
          const userSavedPosts = {
            ...userData,
            saved: [...userData?.saved, addedPostToUserData],
          };

          setUserData(userSavedPosts);
        } else if (data.status === "remove") {
          const updatedSaved = userData?.saved.filter(
            (savedPost) => savedPost?.id !== addedPostToUserData?.id
          );

          const updatedUserDataWithSaved = { ...userData, saved: updatedSaved };

          setUserData(updatedUserDataWithSaved);
        }
        break;

      case postActionNames.CREATE_POST:
        const newData = [
          {
            ...basePostExample,
            user: userData.user,
            date: `${weekName} , ${dayNumber} ${monthName} ${year}`,
            text: data.text,
          },
          ...globalData,
        ];

        setGlobalData(newData);
        break;

      case postActionNames.ADD_COMMENT:
        const {
          post: { id },
          text,
        } = data;

        const newPostsData = globalData.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              comments: [
                ...item.comments,
                { id: uuid(), user: userData.user, text },
              ],
            };
          }

          return item;
        });

        setGlobalData(newPostsData);

        break;

      case postActionNames.CHANGE_COMMENT:
        const updatedPost = data;

        const newArr = globalData.map((post) => {
          if (post?.id === updatedPost?.id) {
            return updatedPost;
          }

          return post;
        });

        setGlobalData(newArr);
        break;
      default:
        break;
    }
  };

  return (
    <DataContext.Provider
      value={{ userData, setUserData, globalData, postAction, allUsers }}
    >
      {children}
    </DataContext.Provider>
  );
};
