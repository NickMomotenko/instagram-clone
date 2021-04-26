import React from "react";

import styled from "styled-components";

const AvatarWrapp = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  width: ${(props) => (props.size ? `${props.size}px` : "40px")};
  height: ${(props) => (props.size ? `${props.size}px` : "40px")};
  border-radius: 50%;
  background-color: #fff;

  border: 2px solid transparent;
  box-shadow: 0 0 5px #eaeaff;
`;

const Avatar = ({ url, ...props }) => {
  return <AvatarWrapp url={url} {...props} />;
};

export default Avatar;
