import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Post from "../../UI/Post";

import EditItemEx from "./EditItemEx";

const EditPostsWrapp = styled.div``;

const EditPosts = () => {
  const { authUser } = useSelector((state) => state.authUser);

  const { posts: authUserPosts } = authUser;

  return (
    <EditPostsWrapp>
      {/* <EditItemEx /> */}
      {authUserPosts?.map((post) => {
        // const isMyPost = authUser.user.userId === post.user.id;

        return (
          <Post
            post={post}
            key={post.id}
            // isMyPost={isMyPost}
            userId={authUser.user.id}
            authUser={authUser}
          />
        );
      })}
    </EditPostsWrapp>
  );
};

export default EditPosts;
