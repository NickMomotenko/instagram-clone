import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import { Block, Row } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";

import { EditGeneralWrapp, EditMore, EditButtons } from "./styled";

import { useInput } from "../../hooks/useInput";

import { baseRoutes } from "../../helpers/base-routes";
import { InputLabel } from "../../UI/Input/styled";

const inputs = [
  { placeholder: "Nickname", viewIndex: 2 },
  { placeholder: "Fullname", viewIndex: 2 },
  { placeholder: "Description", viewIndex: 2 },
  { placeholder: "Job", viewIndex: 1 },
  { placeholder: "City", viewIndex: 1 },
  // { placeholder: "Links", viewIndex: 1 },
];

const EditGeneral = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { user } = authUser;

  const fullname = useInput(user["fullname"], "fullname");
  const nickname = useInput(user["nickname"], "nickname");
  const description = useInput(user["description"], "description");
  const job = useInput(user["job"], "job");
  const city = useInput(user["city"], "city");

  const [isFullInputDisplay, setIsFullInputDisplay] = React.useState(false);

  const navigate = useNavigate();

  const moreButtonText = isFullInputDisplay ? "Close" : "More";

  const onMoreButtonClick = () => {
    setIsFullInputDisplay(!isFullInputDisplay);
  };

  const onCancelButton = () => {
    navigate(baseRoutes.profile);
  };

  const onSaveButton = () => {};

  return (
    <EditGeneralWrapp>
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
          <Input
            labelName="Nickname"
            value={nickname.value}
            onChange={nickname.onChange}
            name={nickname.name}
            style={{ marginBottom: 10 }}
            noError
          />
          <Input
            labelName="Fullname"
            value={fullname.value}
            onChange={fullname.onChange}
            name={fullname.name}
            style={{ marginBottom: 10 }}
            noError
          />
          <Block>
            <InputLabel>Description</InputLabel>
            <Textarea
              value={description.value}
              onChange={description.onChange}
              name={description.name}
              style={{ marginBottom: 10, minHeight: 120 }}
            />
          </Block>
          {isFullInputDisplay && (
            <>
              <Input
                labelName="Job"
                value={job.value}
                onChange={job.onChange}
                name={job.name}
                style={{ marginBottom: 10 }}
                noError
              />
              <Input
                labelName="City"
                value={city.value}
                onChange={city.onChange}
                name={city.name}
                style={{ marginBottom: 10 }}
                noError
              />
            </>
          )}
          <EditMore>
            <DefaultButton
              onClick={() => {
                onMoreButtonClick();
              }}
              text={moreButtonText}
              bgColor="#f8fbff"
              style={{ color: "#6d747e", border: "1px solid #6d747e" }}
            />
          </EditMore>
        </Block>
      </Row>
      <EditButtons>
        <DefaultButton text="Save" style={{ marginRight: 20 }} />
        <DefaultButton text="Cancel" onClick={onCancelButton} />
      </EditButtons>
    </EditGeneralWrapp>
  );
};

export default EditGeneral;
