import React from "react";

import { PostsWrapp } from "./styled";

import Post from "../../UI/Post";
import { DataContext } from "../../context/data";
import { useSelector } from "react-redux";

const Posts = ({ posts, postAction }) => {
  const {
    userData: {
      user: { id: userId },
    },
  } = React.useContext(DataContext);

  const { authUser } = useSelector((state) => state.authUser);

  const updateAuthUserData = () => {};

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
            authUser={authUser}
          />
        );
      })}
    </PostsWrapp>
  );
};

export default Posts;
