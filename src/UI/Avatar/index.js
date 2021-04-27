import React from "react";

import styled, { css } from "styled-components";

// const AvatarWrapp = styled.div`
//   display: inline-block;
//   width: ${(props) => (props.size ? `${props.size}px` : "40px")};
//   height: ${(props) => (props.size ? `${props.size}px` : "40px")};
//   border-radius: 50%;
//   border-image-slice: 20;

//   background-image: ${(props) => `url(${props.url})`};
//   background-size: cover;
//   background-position: center;

//   position: relative;

//   &:before {
//     content: "";
//     position: absolute;
//     top: -5px;
//     right: -5px;
//     bottom: -5px;
//     left: -5px;
//     border-radius: 50%;
//     background-image: radial-gradient(
//       circle at 30% 107%,
//       #fdf497 0%,
//       #fdf497 5%,
//       #fd5949 45%,
//       #d6249f 60%,
//       #285aeb 90%
//     );
//     z-index: -1;
//     transition: transform 5s ease-in-out;
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     top: -3px;
//     right: -3px;
//     bottom: -3px;
//     left: -3px;
//     border-radius: 50%;
//     background: #fff;
//     z-index: -1;
//   }

//   &:hover:before {
//     transform: rotate(888deg);
//   }
// `;

const AvatarWrapp = styled.div`
  display: inline-block;
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
`;

const AvatarImg = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;

const Avatar = ({ url, ...props }) => {
  return (
    <AvatarWrapp {...props}>
      <AvatarImg url={url} />
    </AvatarWrapp>
  );
};

export default Avatar;
