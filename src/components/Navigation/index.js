import React from "react";

import {
  NavigationWrapp,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./styled";

import { baseRoutes } from "../../helpers/base-routes";

import { useWindowResize } from "../../hooks/useWindowResize";

const list = [
  {
    id: 1,
    title: "Main",
    link: baseRoutes.base,
  },
  {
    id: 2,
    title: "Profile",
    link: baseRoutes.profile,
  },
  {
    id: 3,
    title: "Direct",
    link: baseRoutes.direct,
  },
];

const Navigation = ({ isActive, onClick }) => {
  const windowSize = useWindowResize();

  const isMobileWidth = windowSize <= 480;

  const navigationList = isMobileWidth
    ? [...list, { id: 4, title: "Logout", link: "#" }]
    : list;

  return (
    <NavigationWrapp isActive={isActive}>
      <NavigationList>
        {navigationList.map(({ id, title, link }) => {
          return (
            <NavigationItem key={id} isLogoutButton={title === "Logout"}>
              <NavigationLink to={link} onClick={onClick}>
                {title}
              </NavigationLink>
            </NavigationItem>
          );
        })}
      </NavigationList>
    </NavigationWrapp>
  );
};

export default Navigation;
