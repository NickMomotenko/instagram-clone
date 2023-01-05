import React from "react";

import styled from "styled-components";
import DefaultButton from "../../UI/DefaultButton";

const EditItemExWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #f0f6fd;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 15px 5px;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

const EditItemView = styled.div``;

const EditItemButtons = styled.div``;

const EditItemEx = () => {
  return (
    <EditItemExWrapp>
      <EditItemView />
      <EditItemButtons>
        <DefaultButton text="afaf" />
      </EditItemButtons>
    </EditItemExWrapp>
  );
};

export default EditItemEx;
