import React from "react";

import { useSelector } from "react-redux";

import { PostsWrapp } from "./styled";

import Post from "../../UI/Post";

const Posts = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { posts } = useSelector((state) => state.posts);

  return (
    <PostsWrapp as="ul" style={{ marginBottom: -20 }}>
      {posts?.map((post) => {
        const isMyPost = authUser.user.userId === post.user.id;

        return (
          <Post
            as="li"
            key={post.id}
            post={post}
            isMyPost={isMyPost}
            userId={authUser.user.id}
            authUser={authUser}
          />
        );
      })}
    </PostsWrapp>
  );
};

export default Posts;
