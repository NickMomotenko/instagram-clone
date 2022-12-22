import React from "react";

import {
  NavigationWrapp,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./styled";

const navigationList = [
  {
    id: 1,
    title: "Main",
    link: "/posts",
  },
  {
    id: 2,
    title: "Profile",
    link: "/profile",
  },
];

const Navigation = ({ isActive, onClick }) => {
  return (
    <NavigationWrapp isActive={isActive}>
      <NavigationList>
        {navigationList.map(({ id, title, link }) => (
          <NavigationItem key={id}>
            <NavigationLink to={link} onClick={onClick}>
              {title}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationWrapp>
  );
};

export default Navigation;
