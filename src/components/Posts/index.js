import React from "react";

import { useSelector } from "react-redux";

import { PostList, PostsWrapp } from "./styled";

import Post from "../../UI/Post";

const Posts = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { posts } = useSelector((state) => state.posts);

  return (
    <PostsWrapp>
      <PostList style={{ marginBottom: -20 }}>
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
      </PostList>
    </PostsWrapp>
  );
};

export default Posts;
