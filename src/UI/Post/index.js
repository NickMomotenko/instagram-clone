import React, { useState } from "react";

import { useDispatch } from "react-redux";

import {
  PostWrapp,
  PostImage,
  PostRow,
  PostButton,
  PostLikedText,
} from "./PostStyles";

import { useText } from "../../hooks/useText";
import { useActive } from "../../hooks/useActive";

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
import { DISLIKE_POST, LIKE_POST } from "../../redux/posts/types";

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

const POST_TYPES = {
  VIDEO: "video",
};

const Post = ({ post, postAction, isMyPost, userId, ...props }) => {
  const dispath = useDispatch();

  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false);
  const [save, setSave] = useState(false);

  const commentRef = React.useRef(null);

  let {
    user: { avatar, fullname, city },
    text,
    videoUrl,
    photo,
    date,
    comments,
    liked,
  } = post;

  const postText = useText();
  const isCommentsBarActive = useActive();
  const isOptionsBarActive = useActive();

  const isSlider = photo?.length > 1;

  const lastCommentatorName = liked[liked.length - 1]?.user?.fullname;
  const likedTextWithCommentators =
    liked?.length > 1
      ? `${lastCommentatorName} and ${liked?.length - 1} others`
      : `${lastCommentatorName}`;

  const commentText = `View all comments (${comments?.length})`;

  const postOptionsWithPersonalFunctions = [
    ...postOptions,
    { id: 5, title: "Delete", onClick: () => {} },
  ];

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
      isCommentsBarActive.setIsActive(false);
      isOptionsBarActive.setIsActive(false);
    }
  };

  const likePost = (post) => {
    if (!like) {
      setLike(true);
      postAction("like_post", { post, status: "add" });
      dispath({ type: LIKE_POST, id: post.id });
    } else {
      setLike(false);
      postAction("like_post", { post, status: "remove" });
      dispath({ type: DISLIKE_POST, id: post.id });
    }
  };

  const commentPost = () => {
    isCommentsBarActive.setIsActive(true);
  };

  const savePost = (post) => {
    if (!save) {
      setSave(true);
      postAction("save_post", { post, status: "add" });
    } else {
      setSave(false);
      postAction("save_post", { post, status: "remove" });
    }
  };

  return (
    <PostWrapp ref={commentRef} {...props}>
      <PostRow style={{ padding: "0 15px" }}>
        <Block style={{ marginRight: 11 }}>
          <Avatar as="button" url={avatar} fullname={fullname} size={40} />
        </Block>
        <Block>
          <Text text={fullname} bold />
          <Text text={city} color="#76777E" />
        </Block>
        <Button
          icon={dots}
          style={{ marginLeft: "auto" }}
          onClick={() => isOptionsBarActive.setIsActive(true)}
        />
      </PostRow>
      <PostRow>
        {post.postType === POST_TYPES.VIDEO && <Video url={videoUrl} />}
        {isSlider ? <CustomSlider slides={photo} /> : <PostImage url={photo} />}
      </PostRow>
      <Block style={{ padding: "0 15px" }}>
        <PostRow>
          <PostButton
            icon={likeIcon}
            active={like}
            onClick={() => likePost(post)}
          />
          <PostButton icon={commentIcon} onClick={commentPost} />
          <PostButton
            icon={shareIcon}
            active={share}
            onClick={() => setShare(!share)}
          />
          <PostButton
            icon={saveIcon}
            active={save}
            onClick={() => savePost(post)}
            style={{ marginLeft: "auto" }}
          />
        </PostRow>
        {liked?.length !== 0 && (
          <PostRow center btw>
            <Row center style={{ marginRight: 10 }}>
              <PostLikedText>
                Liked by{" "}
                <Text
                  text={`${likedTextWithCommentators}`}
                  bold
                  style={{ fontSize: 13, display: "inline-block" }}
                />
              </PostLikedText>
            </Row>
            <AvatarMultiRow data={liked} />
          </PostRow>
        )}
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
            text={commentText}
            color="#76777E"
            bold
            style={{ fontSize: 12 }}
            onClick={(e) => {
              e.preventDefault();
              isCommentsBarActive.setIsActive(true);
            }}
          />
        </PostRow>
        <PostRow>
          <Text text={date} color="#76777E" style={{ fontSize: 12 }} />
        </PostRow>
      </Block>
      <PostComments
        postAction={postAction}
        post={post}
        isCommentsBarActive={isCommentsBarActive}
        userId={userId}
        // onClick={() => isCommentsBarActive.setIsActive(false)}
      />
      <PostOptions
        options={isMyPost ? postOptionsWithPersonalFunctions : postOptions}
        active={isOptionsBarActive.isActive}
        onClick={() => isOptionsBarActive.setIsActive(false)}
      />
    </PostWrapp>
  );
};

export default Post;
