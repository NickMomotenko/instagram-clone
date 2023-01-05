import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { profileEditRoutes } from "../../helpers/base-routes";

import DefaultButton from "../../UI/DefaultButton";
import Text from "../../UI/Text";

import {
  EditWrapp,
  EditContent,
  EditOptions,
  EditOptionsItem,
  EditMain,
} from "./styled";

const editOptions = [
  {
    title: "General",
    path: `${profileEditRoutes.general}`,
  },
  {
    title: "Posts",
    path: `${profileEditRoutes.posts}`,
  },
  {
    title: "Saved",
    path: `${profileEditRoutes.saved}`,
  },
  {
    title: "Liked",
    path: `${profileEditRoutes.liked}`,
  },
];

const Edit = () => {
  const [isEditActive, setIsEditActive] = React.useState(false);

  const editContentRef = React.useRef(null);

  const pathName = useLocation().pathname;

  React.useEffect(() => {
    // const editContent = editContentRef.current;

    const pathArr = [
      "/profile/edit",
      "/profile/edit/general",
      "/profile/edit/posts",
    ];

    if (pathArr.includes(pathName)) {
      setIsEditActive(true);
    }
  }, [pathName]);

  return (
    <EditWrapp active={isEditActive}>
      <EditContent ref={editContentRef} style={{ width: "55vw" }}>
        <Text
          text="Edit profile"
          bold
          style={{ fontSize: 18, marginBottom: 20 }}
        />
        <EditOptions as="ul" style={{ marginBottom: 30 }}>
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
        <EditMain>
          <Outlet />
        </EditMain>
      </EditContent>
    </EditWrapp>
  );
};

export default Edit;
