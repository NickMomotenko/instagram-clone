import React from "react";

import styled from "styled-components";
import Avatar from "../Avatar";

const AvatarMultiRowWrapp = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: -5px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const AvatarMultiRow = ({ data = [] }) => {
  return (
    <AvatarMultiRowWrapp>
      {data.map(({ avatar, id }, index) => (
        <Avatar key={id} url={avatar} size={20} index={index} />
      ))}
    </AvatarMultiRowWrapp>
  );
};

export default AvatarMultiRow;
