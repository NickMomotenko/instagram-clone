import React, { useState } from "react";

import { PostWrapp, PostImage, PostRow, PostButton } from "./PostStyles";

import { useText } from "../../hooks/useText";
import { usePostBar } from "../../hooks/usePostBar";

import Avatar from "../Avatar";
import AvatarMultiRow from "../AvatarMultiRow";
import Text from "../Text";
import Button from "../Button";
import { Row, Block } from "../Layout";
import Video from "../Video";
import TextOpenOrClose from "../TextOpenOrClose";

import PostComments from "./PostComments";

import CustomSlider from "../../components/CustomSlider";

import shareIcon from "../../assets/icons/1.svg";
import saveIcon from "../../assets/icons/2.svg";
import commentIcon from "../../assets/icons/3.svg";
import likeIcon from "../../assets/icons/4.svg";

import dots from "../../assets/icons/dots.svg";
import PostOptions from "./PostOptions";

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

const postOptions = [
  {
    id: 1,
    title: "Report",
    onClick: () => {},
  },
  {
    id: 2,
    title: "Share to",
    onClick: () => {},
  },
  {
    id: 3,
    title: "Copy link",
    onClick: () => {},
  },
  {
    id: 4,
    title: "Cancel",
    onClick: () => {},
  },
];

const Post = ({ post, postAction, ...props }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false);
  const [save, setSave] = useState(false);

  const commentRef = React.useRef(null);

  let { avatar, fullname, city, text, photo, date, comments } = post;

  const postText = useText();

  const commentsBar = usePostBar();
  const optionsBar = usePostBar();

  let count = 100;

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsidePost);

    return () => {
      document.removeEventListener("click", handleClickOutsidePost);
    };
  }, []);

  const handleClickOutsidePost = (e) => {
    if (commentRef?.current?.contains(e.target)) {
      return;
    } else {
      commentsBar.setIsActive(false);
      optionsBar.setIsActive(false);
    }
  };

  return (
    <PostWrapp ref={commentRef} {...props}>
      <PostRow style={{ padding: "0 15px" }}>
        <Block style={{ marginRight: 11 }}>
          <Avatar as="button" url={avatar} size={40} />
        </Block>
        <Block>
          <Text text={fullname} bold />
          <Text text={city} color="#76777E" />
        </Block>
        <Button
          icon={dots}
          style={{ marginLeft: "auto" }}
          onClick={() => optionsBar.setIsActive(true)}
        />
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
              commentsBar.setIsActive(true);
            }}
          />
        </PostRow>
        <PostRow>
          <Text text={date} color="#76777E" style={{ fontSize: 12 }} />
        </PostRow>
      </Block>
      <PostComments
        comments={comments}
        active={commentsBar.isActive}
        onClick={() => commentsBar.setIsActive(false)}
      />
      <PostOptions
        options={postOptions}
        active={optionsBar.isActive}
        onClick={() => optionsBar.setIsActive(false)}
      />
    </PostWrapp>
  );
};

export default Post;
