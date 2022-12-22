import React from "react";

import { PopupWrapp, PopupContent } from "./styles";

import { Row, Block } from "../../UI/Layout";
import Avatar from "../../UI/Avatar";
import Text from "../../UI/Text";
import Textarea from "../../UI/Textarea";
import DefaultButton from "../../UI/DefaultButton";

import { useInput } from "../../hooks/useInput";

const Popup = ({ user, isActive, postAction, setIsActive }) => {
  const postInput = useInput({option:{ symbolLimit: 255 }});

  const isCreateButtonDisabled = postInput?.value.length === 0;

  return (
    <PopupWrapp active={isActive}>
      <PopupContent>
        <Row style={{ paddingLeft: 5 }} center>
          <Block style={{ marginRight: 11 }}>
            <Avatar url={user?.avatar} fullname={user?.fullname} size={40} />
          </Block>
          <Block>
            <Text text={user?.fullname} bold />
          </Block>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <DefaultButton
            // type ????
            // type="image"
            text="Add photos"
            bgColor="transparent"
            style={{ border: "1px solid #9d6b6b", color: "#9d6b6b" }}
          />
          <DefaultButton
            // type ????
            // type="image"
            text="Add videos"
            bgColor="transparent"
            style={{
              border: "1px solid #525ab7",
              color: "#525ab7",
              marginLeft: 15,
            }}
          />
        </Row>
        <Block style={{ marginTop: 20 }}>
          <Block>
            <Textarea
              value={postInput.value}
              onChange={postInput.onChange}
              placeholder="Post text"
              currentLimit={`${postInput.currentLimit}`}
              maxLength={postInput.symbolLimit}
              style={{ height: 150 }}
            ></Textarea>
          </Block>

          <Row style={{ marginTop: 20 }}>
            <DefaultButton
              text="Create"
              fullWidth
              disabled={isCreateButtonDisabled}
              style={{ marginRight: 20 }}
              onClick={() => {
                setIsActive(true);
                postAction("create", { text: postInput?.value });
                setIsActive(false);
                postInput.clearValue();
              }}
            />
            <DefaultButton
              text="Cancel"
              fullWidth
              bgColor="#0095f6"
              onClick={() => setIsActive(false)}
            />
          </Row>
        </Block>
      </PopupContent>
    </PopupWrapp>
  );
};

export default Popup;
