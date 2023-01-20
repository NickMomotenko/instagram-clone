import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Post from "../../UI/Post";

const EditPostsWrapp = styled.div`
  column-count: 2;

  @media screen and (max-width:670px){
    column-count: 1;
  }
`;

const EditPostItem = styled.div``;

const EditPosts = () => {
  const { authUser } = useSelector((state) => state.authUser);

  const { posts: authUserPosts } = authUser;

  return (
    <EditPostsWrapp as="ul">
      {authUserPosts?.map((post) => {
        const isMyPost = authUser.user?.id === post.user?.id;

        return (
          <EditPostItem key={post.id} as="li">
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
