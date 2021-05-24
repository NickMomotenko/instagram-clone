import React from "react";

import {
  PostOptionsLink,
  PostOptionsItem,
  PostOptionsWrapp,
  PostOptionsList,
} from "./PostOptionsStyles";

const PostOptions = ({ options, active, onClick }) => {
  return (
    <PostOptionsWrapp active={active}>
      <PostOptionsList as="ul">
        {options.map((item) => (
          <PostOptionsItem key={item.id} as="li">
            <PostOptionsLink as="button" onClick={onClick}>
              {item.title}
            </PostOptionsLink>
          </PostOptionsItem>
        ))}
      </PostOptionsList>
    </PostOptionsWrapp>
  );
};

export default PostOptions;
