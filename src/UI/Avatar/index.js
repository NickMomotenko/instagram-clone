import React from "react";

import styled, { css } from "styled-components";

import Text from "../Text";

const AvatarWrapp = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size ? `${props.size}px` : "40px")};
  height: ${(props) => (props.size ? `${props.size}px` : "40px")};
  border-radius: 50%;
  border-image-slice: 20;

  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background-image: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    transition: transform 5s ease-in-out;
  }

  &:after {
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background: #fff;
  }

  &:hover:before {
    transform: rotate(888deg);
  }

  ${(props) =>
    props.noGradient &&
    css`
      box-shadow: 0 0 2px #202091;

      &:before,
      &:after {
        display: none;
      }
    `}
`;

// const AvatarImg = styled.img.attrs(({ url }) => ({
//   src: url,
// }))`
//   display: block;
//   max-height: 100%;
//   width: 100%;
//   object-fit: cover;
//   border-radius: 50%;
//   position: relative;
//   z-index: 2;
// `;

// <AvatarImg url={url} />

const AvatarImg = styled.div`
  display: block;

  max-height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;

  text-align: center;
`;

const Avatar = (props) => {
  const { url, fullname, textSize } = props;

  const shortFormOfFullname = fullname
    ?.split(" ")
    .map((word) => word.charAt())
    .join("");

  return (
    <AvatarWrapp {...props}>
      <AvatarImg>
        <Text
          text={shortFormOfFullname}
          bold
          style={{ fontSize: textSize ? `${textSize}px` : 16 }}
        />
      </AvatarImg>
    </AvatarWrapp>
  );
};

export default Avatar;
