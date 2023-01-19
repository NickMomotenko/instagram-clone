import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { profileEditRoutes } from "../../helpers/base-routes";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";

import {
  EditWrapp,
  EditContent,
  EditOptions,
  EditOptionsItem,
  EditMain,
  EditHeader,
  EditOptionsButton,
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
    if (isEditActive) document.body.style.overflow = "hidden";
  }, [isEditActive]);

  React.useEffect(() => {
    const pathArr = [
      "/profile/edit",
      "/profile/edit/general",
      "/profile/edit/posts",
    ];

    if (pathArr.includes(pathName)) {
      setIsEditActive(true);
    } else setIsEditActive(false);
  }, [pathName]);

  React.useEffect(() => {
    const wrapperBlock = editContentRef.current;

    if (
      pathName === "/profile/edit/general" ||
      pathName === "/profile/edit/posts"
    ) {
      wrapperBlock.style.maxWidth = "767px";
      wrapperBlock.style.width = "100%";
    }
  }, [pathName]);

  return (
    <EditWrapp active={isEditActive}>
      <EditContent
        ref={editContentRef}
        style={{
          overflowY: "auto",
          paddingTop: 0,
          paddingBottom: 0,
          maxHeight: "100%",
        }}
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
