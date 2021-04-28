import React from "react";

import styled from "styled-components";
import Avatar from "../Avatar";

const SingleAvatar = styled(Avatar)`
  margin-left: -5px;
  background-color: #fff;

  &:first-child {
    margin-left: 0;
  }
`;

const AvatarMultiRowWrapp = styled.div`
  display: flex;
  align-items: center;

`;

const AvatarMultiRow = ({ data = [] }) => {
  return (
    <AvatarMultiRowWrapp>
      {data.map(({ avatar, id }, index) => (
        <SingleAvatar
          key={id}
          url={avatar}
          size={20}
          index={index}
          noGradient
        />
      ))}
    </AvatarMultiRowWrapp>
  );
};

export default AvatarMultiRow;
