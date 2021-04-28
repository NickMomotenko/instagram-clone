import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import styled, { css } from "styled-components";

import Avatar from "../Avatar";
import AvatarMultiRow from "../AvatarMultiRow";
import Text from "../Text";
import Button from "../Button";

import { Row, Column, Block } from "../Layout";

import _1 from "../../assets/icons/1.svg";
import _2 from "../../assets/icons/2.svg";
import _3 from "../../assets/icons/3.svg";
import _4 from "../../assets/icons/4.svg";

import dots from "../../assets/icons/dots.svg";
import kavIcon from "../../assets/icons/kav.svg";

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

const PostText = styled(Text)`
  ${(props) =>
    props.visible === true &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

const options = [
  {
    id: uuid(),
    title: "like",
    onClick: () => {},
    icon: _4,
  },
  {
    id: uuid(),
    title: "comment",
    onClick: () => {},
    icon: _3,
  },
  {
    id: uuid(),
    title: "share",
    onClick: () => {},
    icon: _1,
  },
  {
    id: uuid(),
    title: "save",
    onClick: () => {},
    icon: _2,
  },
];

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

const Post = ({ avatar, fullname, city, text, photo, date, ...rest }) => {
  const [like, setLike] = useState(true);
  const [share, setShare] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(true);

  let count = 100;

  return (
    <PostWrapp {...rest}>
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
        <PostImage url={photo} />
      </PostRow>
      <Block style={{ padding: "0 15px" }}>
        <PostRow>
          {options.map((button, index) => (
            <Button
              key={button.id}
              icon={button.icon}
              style={{ marginLeft: options.length === ++index && "auto" }}
            />
          ))}
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
          <PostText text={text} color="#4f5160" bold visible={isVisibleText} />
          <Row style={{ justifyContent: "flex-end" }}>
            <Text
              text={isVisibleText ? "(More)" : "(Close)"}
              color="#3737d8"
              bold
              style={{
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={() => setIsVisibleText(!isVisibleText)}
            />
          </Row>
        </Block>
        <PostRow>
          <Text text={date} color="#76777E" style={{ fontSize: 12 }} />
        </PostRow>
      </Block>
    </PostWrapp>
  );
};

export default Post;
