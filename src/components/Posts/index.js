import React from "react";

import { PostsWrapp } from "./styled";

import Post from "../../UI/Post";
import { DataContext } from "../../context/data";

const Posts = ({ posts, postAction }) => {
  const {
    userData: {
      user: { id: userId },
    },
  } = React.useContext(DataContext);

  return (
    <PostsWrapp as="ul" style={{ marginBottom: -20 }}>
      {posts?.map((post) => {
        const isMyPost = userId === post.user.id;

        return (
          <Post
            as="li"
            key={post.id}
            post={post}
            postAction={postAction}
            isMyPost={isMyPost}
            userId={userId}
          />
        );
      })}
    </PostsWrapp>
  );
};

export default Posts;
