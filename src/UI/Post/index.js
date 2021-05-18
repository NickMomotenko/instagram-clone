import React, { useState } from "react";

import styled from "styled-components";

import { useText } from "../../hooks/useText";

import Avatar from "../Avatar";
import AvatarMultiRow from "../AvatarMultiRow";
import Text from "../Text";
import Button from "../Button";
import { Row, Block } from "../Layout";
import Video from "../Video";
import TextOpenOrClose from "../TextOpenOrClose";

import CustomSlider from "../../components/CustomSlider";

import shareIcon from "../../assets/icons/1.svg";
import saveIcon from "../../assets/icons/2.svg";
import commentIcon from "../../assets/icons/3.svg";
import likeIcon from "../../assets/icons/4.svg";

import dots from "../../assets/icons/dots.svg";

const PostWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 10px 40px rgba(222, 230, 237, 0.4);
  border-radius: 30px;
  padding: 15px 5px;
  max-width: 300px;

  display: inline-block;
  vertical-align: top;

  margin-right: 25px;
  margin-bottom: 20px;

  position: relative;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
`;

const PostImage = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  max-width: 100%;
  border-radius: 15px;
`;

const PostRow = styled(Row)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PostButton = styled(Button)`
  margin-right: 9px;

  &:last-child {
    margin-right: 0;
  }
`;

const PostComments = styled.div`
  position: absolute;
  left: ${(props) => (props.active ? "0" : "-100%")};
  top: 0;
  opacity: ${(props) => (props.active ? "1" : "0")};

  z-index: 20;
  transition: left 0.4s, opacity 0.6s;

  height: 100%;
  width: 100%;
  padding: 30px 20px 15px;
  background-color: #221818de;
`;

const avatars = [
  {
    id: 1,
    avatar:
      "https://robohash.org/consequaturlaudantiumquas.png?size=50x50&set=set1",
  },
  {
    id: 2,
    avatar: "https://robohash.org/consequaturmaximehic.png?size=50x50&set=set1",
  },
  {
    id: 3,
    avatar: "https://robohash.org/voluptasesteius.png?size=50x50&set=set1",
  },
];

const Post = ({ post, postAction, ...props }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false);
  const [save, setSave] = useState(false);

  const [isActiveComments, setIsActiveComments] = useState(false);

  let { avatar, fullname, city, text, photo, date, comments } = post;

  const postText = useText();

  let count = 100;

  return (
    <PostWrapp {...props}>
      <PostRow style={{ padding: "0 15px" }}>
        <Block style={{ marginRight: 11 }}>
          <Avatar as="button" url={avatar} size={40} />
        </Block>
        <Block>
          <Text text={fullname} bold />
          <Text text={city} color="#76777E" />
        </Block>
        <Button icon={dots} style={{ marginLeft: "auto" }} />
      </PostRow>
      <PostRow>
        {post.postType === "video" ? (
          <Video url={post.videoUrl} />
        ) : photo.length > 1 ? (
          <CustomSlider slides={photo} />
        ) : (
          <PostImage url={photo[0]} />
        )}
      </PostRow>
      <Block style={{ padding: "0 15px" }}>
        <PostRow>
          <PostButton
            icon={likeIcon}
            active={like}
            onClick={() => {
              setLike((prev) => {
                if (!prev) {
                  postAction("like", "add", post);
                } else {
                  postAction("like", "remove", post);
                }
                return !like;
              });
            }}
          />
          <PostButton
            icon={commentIcon}
            active={comment}
            onClick={() => setComment(!share)}
          />
          <PostButton
            icon={shareIcon}
            active={share}
            onClick={() => setShare(!share)}
          />
          <PostButton
            icon={saveIcon}
            active={save}
            onClick={() =>
              setSave((prev) => {
                if (!prev) {
                  postAction("save", "add", post);
                } else {
                  postAction("save", "remove", post);
                }

                return !save;
              })
            }
            style={{ marginLeft: "auto" }}
          />
        </PostRow>
        <PostRow center btw>
          <Row center>
            <Text
              text={`Liked by Edward Jones and ${count} others`}
              bold
              style={{ fontSize: 13 }}
            />
          </Row>
          <AvatarMultiRow data={avatars} />
        </PostRow>
        <Block>
          <TextOpenOrClose
            text={text}
            boolFlag={postText.isOpen}
            buttonText={postText.isOpen ? "(Close)" : "(More)"}
            buttonTextColor="#3737d8"
            buttonClick={() => postText.setIsOpen(!postText.isOpen)}
          />
        </Block>
        <PostRow>
          <Text
            as="a"
            href="#"
            text={`View all comments (${comments.length})`}
            color="#76777E"
            bold
            style={{ fontSize: 12 }}
            onClick={(e) => {
              e.preventDefault();
              setIsActiveComments(true);
            }}
          />
        </PostRow>
        <PostRow>
          <Text text={date} color="#76777E" style={{ fontSize: 12 }} />
        </PostRow>
      </Block>
      <PostComments
        active={isActiveComments}
        onClick={() => setIsActiveComments(false)}
      >
        {comments.length === 0 ? (
          <Block>
            <Text text="No comments.. Be first ;)" color="#fff" />
          </Block>
        ) : (
          <>
            {comments.map(({ id, user, text }) => (
              <PostRow key={id}>
                <Block style={{ marginRight: 11 }}>
                  <Avatar as="button" url={user.avatar} size={20} />
                </Block>
                <Block style={{ marginTop: -7 }}>
                  <Text
                    text={user.fullname}
                    color="#ffcdcd"
                    as="a"
                    href="/post"
                  />
                  <Text text={text} color="#fff" />
                </Block>
              </PostRow>
            ))}
          </>
        )}
      </PostComments>
    </PostWrapp>
  );
};

export default Post;
