import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Post from "../../UI/Post";

import EditItemEx from "./EditItemEx";

const EditPostsWrapp = styled.div``;

const EditPostItem = styled.div``;

const EditPosts = () => {
  const { authUser } = useSelector((state) => state.authUser);

  const { posts: authUserPosts } = authUser;

  return (
    <EditPostsWrapp>
      {authUserPosts?.map((post) => {
        const isMyPost = authUser.user?.id === post.user?.id;

        return (
          <EditPostItem key={post.id}>
            <Post
              post={post}
              isMyPost={isMyPost}
              userId={authUser.user.id}
              authUser={authUser}
            />
          </EditPostItem>
        );
      })}
    </EditPostsWrapp>
  );
};

export default EditPosts;
