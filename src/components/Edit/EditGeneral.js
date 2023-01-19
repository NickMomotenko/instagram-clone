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
import { useDisplayedInputs } from "../../hooks/useDisplayedInputs";

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

  const inputsArr = [fullname, nickname, description, job, city];

  const [isFullInputDisplay, setIsFullInputDisplay] = React.useState(false);
  const [displayedInputs, setDisplayedInputs] = React.useState(
    normalizeInputs(inputs).filter((input) => input.viewIndex === 2)
  );

  const navigate = useNavigate();

  const moreButtonText = isFullInputDisplay ? "Close" : "More";

  React.useEffect(() => {
    if (!isFullInputDisplay) {
      setDisplayedInputs(
        normalizeInputs(inputs).filter((input) => input.viewIndex === 2)
      );
    } else setDisplayedInputs(normalizeInputs(inputs));
  }, [isFullInputDisplay]);

  React.useEffect(() => {
    setDisplayedInputs(normalizeInputs(displayedInputs));
  }, [
    fullname.value,
    nickname.value,
    description.value,
    job.value,
    city.value,
  ]);

  const onMoreButtonClick = () => {
    setIsFullInputDisplay(!isFullInputDisplay);
  };

  function normalizeInputs(inputs) {
    return inputs.map((input) => {
      let item = [fullname, nickname, description, job, city].find(
        (it) => it["name"] === input.placeholder.toLowerCase()
      );

      return {
        ...input,
        value: item?.value,
        onChange: item?.onChange,
        name: item?.name,
      };
    });
  }

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
          {displayedInputs.map(
            ({ placeholder, value, name, onChange }, ind) => {
              return placeholder === "Description" ? (
                <Block key={ind}>
                  <InputLabel>{placeholder}</InputLabel>
                  <Textarea
                    value={value}
                    onChange={onChange}
                    name={name}
                    style={{ marginBottom: 10, minHeight: 120 }}
                  />
                </Block>
              ) : (
                <Input
                  key={ind}
                  labelName={placeholder}
                  //   placeholder={value}
                  value={value}
                  onChange={onChange}
                  name={name}
                  style={{ marginBottom: 10 }}
                  noError
                />
              );
            }
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
