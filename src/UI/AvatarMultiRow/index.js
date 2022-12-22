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
  const isMoreThanThreeAvatars = data?.length >= 3;
  const changedData = isMoreThanThreeAvatars ? data?.slice(0, 3) : data;

  return (
    <AvatarMultiRowWrapp>
      {changedData.map((userData, index) => {
        const {
          id,
          user: { avatar, fullname },
        } = userData;
        return (
          <SingleAvatar
            key={id}
            url={avatar}
            fullname={fullname}
            size={20}
            textSize={9}
            index={index}
            noGradient
          />
        );
      })}
    </AvatarMultiRowWrapp>
  );
};

export default AvatarMultiRow;
