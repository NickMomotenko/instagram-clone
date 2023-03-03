import React, { useState } from "react";

import { useDispatch } from "react-redux";

import {
  PostCommentsWrapp,
  PostRow,
  PostCommentsContent,
  PostCommentsBottom,
} from "./PostCommentsStyles";

import { useInput } from "../../hooks/useInput";

import { Block, Row } from "../Layout";
import Avatar from "../Avatar";
import Text from "../Text";

import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";

import { ADD_COMMENT, CHANGE_COMMENT } from "../../redux/posts/types";

const PostComments = ({ post, isCommentsBarActive, userId, onClick }) => {
  const [isChangeComment, setIsChangeComment] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);

  const dispath = useDispatch();

  const commentInput = useInput({ initialValue: "test" });

  const { comments } = post;

  const isEmpty = comments?.length === 0;
  const noCommentsText = "No comments.. Be first ;)";

  const addButtonText = isChangeComment ? "Change" : "Add";
  const bgcolorAddButton = isChangeComment && "#b4384c";

  const findComment = (comment) => {
    const { text } = comment;

    if (isChangeComment) {
      setIsChangeComment(false);
      setCurrentComment(null);
      commentInput.clearValue();
    } else {
      setIsChangeComment(true);
      setCurrentComment(comment);
      commentInput.setValue(text);
    }
  };

  const addComment = () => {
    if (!commentInput.value) return;

    // postAction("add_comment", { post, text: commentInput.value });
    dispath({
      type: ADD_COMMENT,
      data: { id: post.id, text: commentInput.value },
    });

    commentInput.clearValue();
  };

  const changeComment = () => {
    const commentText = commentInput.value;

    const updatedCommentsArr = post?.comments.map((comment) => {
      if (comment?.id === currentComment?.id) {
        if (commentText === currentComment?.text) {
          return comment;
        } else return { ...comment, text: commentText };
      }
      return comment;
    });

    const updatedPost = { ...post, comments: updatedCommentsArr };

    dispath({ type: CHANGE_COMMENT, updatedPost });
    setIsChangeComment(false);
    setCurrentComment(null);
    commentInput.clearValue();
  };

  const addButtonClickFunction = isChangeComment ? changeComment : addComment;

  return (
    <PostCommentsWrapp active={isCommentsBarActive.isActive} onClick={onClick}>
      <PostCommentsContent as={isEmpty ? "div" : "ul"}>
        {isEmpty ? (
          <Text text={noCommentsText} color="#fff" />
        ) : (
          comments?.map((comment) => {
            const { id, user, text } = comment;

            const isMyComment = userId === user?.id;
            const searchableComment = id === currentComment?.id;
            const changeButtonText =
              searchableComment && isChangeComment ? "x" : "change";

            return (
              <PostRow key={id} as="li">
                <Block style={{ marginRight: 11 }}>
                  <Avatar
                    url={user?.avatar}
                    fullname={user?.fullname}
                    textSize={11}
                    size={20}
                  />
                </Block>
                <Block style={{ marginTop: -7, flex: 1 }}>
                  <Row btw center>
                    <Text
                      text={user?.fullname}
                      color="#ffcdcd"
                      as="a"
                      href="/post"
                    />
                    {isMyComment && (
                      <Text
                        as="button"
                        text={changeButtonText}
                        color="#fff"
                        style={{ fontSize: 10, textDecoration: "underline" }}
                        onClick={() => findComment(comment)}
                      />
                    )}
                  </Row>
                  <Text text={text} color="#fff" />
                </Block>
              </PostRow>
            );
          })
        )}
      </PostCommentsContent>
      <PostCommentsBottom>
        <Row>
          <Input
            value={commentInput.value}
            onChange={commentInput.onChange}
            placeholder="Type comment"
            noError
          />
          <DefaultButton
            text={addButtonText}
            bgcolor={bgcolorAddButton}
            onClick={addButtonClickFunction}
            style={{ marginLeft: 5, padding: "7px 15px" }}
          />
        </Row>
      </PostCommentsBottom>
    </PostCommentsWrapp>
  );
};

export default PostComments;
