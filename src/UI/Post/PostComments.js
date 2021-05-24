import React from "react";

import { PostCommentsWrapp, PostRow } from "./PostCommentsStyles";

import { Block, Row } from "../Layout";
import Avatar from "../Avatar";
import Text from "../Text";

const PostComments = ({ comments, active, onClick }) => {
  return (
    <PostCommentsWrapp active={active} onClick={onClick}>
      {comments.length === 0 && (
        <Text text="No comments.. Be first ;)" color="#fff" />
      )}
      {comments?.map(({ id, user, text }) => (
        <PostRow key={id}>
          <Block style={{ marginRight: 11 }}>
            <Avatar as="button" url={user.avatar} size={20} />
          </Block>

          <Block style={{ marginTop: -7 }}>
            <Text text={user.fullname} color="#ffcdcd" as="a" href="/post" />
            <Text text={text} color="#fff" />
          </Block>
        </PostRow>
      ))}
    </PostCommentsWrapp>
  );
};

export default PostComments;
