import React from "react";

import { useSelector } from "react-redux";

import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import { Block, Row } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";

import { EditMore, EditButtons } from "./styled";

import { useInput } from "../../hooks/useInput";

const inputs = [
  //   { placeholder: "Nickname", viewIndex: 2 },
  { placeholder: "Fullname", viewIndex: 2 },
  //   { placeholder: "Description", viewIndex: 2 },
  //   { placeholder: "Job", viewIndex: 1 },
  //   { placeholder: "City", viewIndex: 1 },
  //   { placeholder: "Links", viewIndex: 1 },
];

const EditGeneral = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const [isFullInputDisplay, setIsFullInputDisplay] = React.useState(false);
  const [displayedInputs, setDisplayedInputs] = React.useState(
    inputs.filter((input) => input.viewIndex === 2)
  );

  const fullname = useInput();

  const moreButtonText = isFullInputDisplay ? "Close" : "More";
  const { user } = authUser;

  React.useEffect(() => {
    if (!isFullInputDisplay) {
      setDisplayedInputs(
        normalizeInputs(inputs).filter((input) => input.viewIndex === 2)
      );
      return;
    }

    setDisplayedInputs(normalizeInputs(inputs));
  }, [isFullInputDisplay]);

  const onMoreButtonClick = () => {
    setIsFullInputDisplay(!isFullInputDisplay);
  };

  function normalizeInputs(inputs) {
    return inputs.map((input) => {
      return {
        ...input,
        value: user[input.placeholder.toLowerCase()],
        onChange: fullname.onChange,
      };
    });
  }

  return (
    <div>
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
          {displayedInputs.map(({ placeholder, value, onChange }, ind) => {
            return placeholder === "Description" ? (
              <Textarea value={value} style={{ marginBottom: 10 }} />
            ) : (
              <Input
                key={ind}
                labelName={placeholder}
                //   placeholder={value}
                value={value}
                onChange={onChange}
                style={{ marginBottom: 10 }}
                noError
              />
            );
          })}
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
        <EditButtons>
          <DefaultButton text="Save" style={{ marginRight: 20 }} />
          <DefaultButton text="Cancel" />
        </EditButtons>
      </Row>
    </div>
  );
};

export default EditGeneral;
