import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { profileEditRoutes } from "../../helpers/base-routes";

import DefaultButton from "../../UI/DefaultButton";
import { Block } from "../../UI/Layout";
import Text from "../../UI/Text";

import {
  EditWrapp,
  EditContent,
  EditOptions,
  EditOptionsItem,
  EditMain,
  EditHeader,
} from "./styled";

const editOptions = [
  {
    title: "General",
    path: `${profileEditRoutes.general}`,
  },
  {
    title: "My posts",
    path: `${profileEditRoutes.posts}`,
  },
];

const Edit = () => {
  const [isEditActive, setIsEditActive] = React.useState(false);

  const editContentRef = React.useRef(null);

  const pathName = useLocation().pathname;

  React.useEffect(() => {
    const pathArr = [
      "/profile/edit",
      "/profile/edit/general",
      "/profile/edit/posts",
      "/profile/edit/liked",
      "/profile/edit/saved",
    ];

    if (pathArr.includes(pathName)) {
      setIsEditActive(true);
    } else setIsEditActive(false);
  }, [pathName]);

  return (
    <EditWrapp active={isEditActive}>
      <EditContent
        ref={editContentRef}
        style={{ width: "55vw", overflowY: "auto", height: "100%" }}
      >
        <EditHeader>
          <Text
            text="Edit profile"
            bold
            style={{ fontSize: 18, marginBottom: 20 }}
          />
          <EditOptions as="ul">
            {editOptions.map(({ title, path }, ind) => (
              <EditOptionsItem key={ind} as="li">
                <DefaultButton
                  text={title}
                  as={Link}
                  to={path}
                  style={{
                    background: "transparent",
                    color: "#7751518a",
                    borderColor: "#7751518a",
                    border: "1px solid",
                  }}
                />
              </EditOptionsItem>
            ))}
          </EditOptions>
        </EditHeader>
        <EditMain>
          <Outlet />
        </EditMain>
      </EditContent>
    </EditWrapp>
  );
};

export default Edit;
