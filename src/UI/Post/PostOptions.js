import React from "react";

import {
  PostOptionsLink,
  PostOptionsItem,
  PostOptionsWrapp,
  PostOptionsList,
} from "./PostOptionsStyles";

const PostOptions = ({ options, active, onClick }) => {
  return (
    <PostOptionsWrapp active={active} onClick={onClick}>
      <PostOptionsList as="ul">
        {options.map(({ id, title }) => (
          <PostOptionsItem key={id} as="li">
            <PostOptionsLink as="button" onClick={onClick}>
              {title}
            </PostOptionsLink>
          </PostOptionsItem>
        ))}
      </PostOptionsList>
    </PostOptionsWrapp>
  );
};

export default PostOptions;
