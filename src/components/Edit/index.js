import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { baseRoutes, profileEditRoutes } from "../../helpers/base-routes";

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
import { Block, Row } from "../../UI/Layout";

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
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isEditActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
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

  const onCancelButton = () => {
    navigate(baseRoutes.profile);
  };

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
          <Row btw center style={{ marginBottom: 20 }}>
            <Text text="Edit profile" bold style={{ fontSize: 18 }} />
            <DefaultButton text="Cancel" onClick={onCancelButton} />
          </Row>

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
