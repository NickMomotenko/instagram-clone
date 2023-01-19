import React from "react";

import styled from "styled-components";
import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";
import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";

const EditItemExWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 11px;
  padding: 15px 5px;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  width: calc(100% / 3);
`;

const EditItemView = styled.div``;

const EditItemButtons = styled.div``;

const EditHeader = styled.div``;

const EditItemEx = () => {
  return (
    <EditItemExWrapp>
      <EditHeader>
        <Block>
          <Row>
            <Avatar />
            <Text text="sfafass" />
          </Row>
        </Block>
      </EditHeader>
      <EditItemView />
      <EditItemButtons>
        <DefaultButton text="afaf" />
      </EditItemButtons>
    </EditItemExWrapp>
  );
};

export default EditItemEx;
