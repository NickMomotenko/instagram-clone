import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";
import Input from "../../UI/Input";
import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

import {
  EditWrapp,
  EditContent,
  EditOptions,
  EditOptionsItem,
  EditMain,
  EditButtons,
  EditMore,
} from "./styled";

const inputs = [
  { placeholder: "Nickname", viewIndex: 2 },
  { placeholder: "Fullname", viewIndex: 2 },
  { placeholder: "Description", viewIndex: 2 },
  { placeholder: "Avatar", viewIndex: 2 },
  { placeholder: "Job", viewIndex: 1 },
  { placeholder: "City", viewIndex: 1 },
  { placeholder: "Links", viewIndex: 1 },
];

const editOptions = ["General", "Posts", "Saved", "Liked"];

const Edit = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [displayedInputs, setDisplayedInputs] = React.useState(
    inputs.filter((input) => input.viewIndex === 2)
  );
  const [isFullInputDisplay, setIsFullInputDisplay] = React.useState(false);

  const { authUser } = useSelector((state) => state.authUser);
  const editContentRef = React.useRef(null);

  const pathName = useLocation().pathname;

  const moreButtonText = isFullInputDisplay ? "Close" : "More";

  const { user } = authUser;

  React.useEffect(() => {
    const editContent = editContentRef.current;

    switch (pathName) {
      case "/profile/edit/general":
        editContent.style.width = "55vw";
        break;

      default:
        break;
    }
  }, [pathName]);

  React.useEffect(() => {
    if (!isFullInputDisplay) {
      setDisplayedInputs(inputs.filter((input) => input.viewIndex === 2));
      return;
    }

    setDisplayedInputs(inputs);
  }, [isFullInputDisplay]);

  const onMoreButtonClick = () => {
    setIsFullInputDisplay(!isFullInputDisplay);
  };

  return (
    <EditWrapp active={isActive}>
      <EditContent ref={editContentRef} style={{ width: "55vw" }}>
        <Text
          text="Edit profile"
          bold
          style={{ fontSize: 18, marginBottom: 20 }}
        />
        <EditOptions as="ul" style={{ marginBottom: 30 }}>
          {editOptions.map((opt, ind) => (
            <EditOptionsItem key={ind} as="li">
              <DefaultButton
                text={opt}
                style={{
                  background: "transparent",
                  color: "#7751518a",
                  borderColor: "#7751518a",
                }}
              />
            </EditOptionsItem>
          ))}
        </EditOptions>
        <EditMain>
          <Row>
            <Block style={{ textAlign: "center" }}>
              <Avatar
                size={90}
                textSize={22}
                {...user}
                style={{ marginBottom: 20 }}
              />
              <DefaultButton
                text="Загрузить"
                style={{
                  display: "block",
                  background: "transparent",
                  color: "#7751518a",
                  borderColor: "#7751518a",
                }}
              />
            </Block>
            <Block style={{ flex: 1, marginLeft: 30 }}>
              {displayedInputs.map(({ placeholder }, ind) => (
                <Input
                  key={ind}
                  labelName={placeholder}
                  placeholder={placeholder}
                  style={{ marginBottom: 10 }}
                  noError
                />
              ))}
              <EditMore>
                <DefaultButton
                  onClick={() => {
                    onMoreButtonClick();
                  }}
                  text={moreButtonText}
                  bgColor="#f8fbff"
                  style={{ color: "#afc1d9", border: "1px solid #afc1d9" }}
                />
              </EditMore>
            </Block>
          </Row>
        </EditMain>
        <EditButtons>
          <DefaultButton text="Save" style={{ marginRight: 20 }} />
          <DefaultButton text="Cancel" />
        </EditButtons>
      </EditContent>
    </EditWrapp>
  );
};

export default Edit;
