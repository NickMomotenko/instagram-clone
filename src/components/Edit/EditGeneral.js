import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import { Block, Row } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";

import {
  EditGeneralWrapp,
  EditMore,
  EditGeneralButtons,
  EditGeneralContent,
  EditGeneralAvatar,
  EditGeneralInputs,
} from "./styled";

import { useInput } from "../../hooks/useInput";

import { baseRoutes } from "../../helpers/base-routes";
import { InputLabel } from "../../UI/Input/styled";

import { UPDATE_USER } from "../../redux/user/types";

const EditGeneral = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { user } = authUser;

  const fullname = useInput({
    initialValue: user["fullname"],
    name: "fullname",
  });
  const nickname = useInput({
    initialValue: user["nickname"],
    name: "nickname",
  });
  const description = useInput({
    initialValue: user["description"],
    name: "description",
  });
  const job = useInput({ initialValue: user["job"], name: "job" });
  const city = useInput({ initialValue: user["city"], name: "city" });

  const usedInputs = [fullname, nickname, description, job, city];

  const [isFullInputDisplay, setIsFullInputDisplay] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moreButtonText = isFullInputDisplay ? "Close" : "More";

  const onMoreButtonClick = () => {
    setIsFullInputDisplay(!isFullInputDisplay);
  };

  const onCancelButton = () => {
    navigate(baseRoutes.profile);
  };

  const onSaveButton = () => {
    const { avatar, id, links, ...restUserData } = user;

    Object.keys(restUserData).forEach((key) => {
      for (const input of usedInputs) {
        if (input.name === key) {
          if (input.value !== restUserData[key]) {
            restUserData[key] = input.value;
          }
        }
      }
      return key;
    });

    const updatedUserData = { ...authUser, user: restUserData };

    dispatch({ type: UPDATE_USER, updatedUserData });
  };

  return (
    <EditGeneralWrapp>
      <EditGeneralContent>
        <EditGeneralAvatar>
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
        </EditGeneralAvatar>
        <EditGeneralInputs>
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
              {/* {user?.links.map(({ id, link, title }) => (
                <Block key={id}>
                  <a href={link}>{title}</a>
                </Block>
              ))} */}
            </>
          )}
          <EditMore>
            <DefaultButton
              onClick={() => {
                onMoreButtonClick();
              }}
              text={moreButtonText}
              bgcolor="#f8fbff"
              style={{ color: "#6d747e", border: "1px solid #6d747e" }}
            />
          </EditMore>
        </EditGeneralInputs>
      </EditGeneralContent>
      <EditGeneralButtons>
        <DefaultButton
          text="Save"
          onClick={onSaveButton}
          style={{ marginRight: 20 }}
        />
        <DefaultButton text="Cancel" onClick={onCancelButton} />
      </EditGeneralButtons>
    </EditGeneralWrapp>
  );
};

export default EditGeneral;
