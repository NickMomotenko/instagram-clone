import React from "react";

import { Outlet } from "react-router-dom";

import { MainWrapp } from "./styled";

import { usePopup } from "../../hooks/popup";

import { withData } from "../../context/data";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Popup from "../../components/Popup";

import { Row } from "../../UI/Layout";

const Main = React.memo((props) => {
  let {
    postAction,
    userData: { user },
    popup,
  } = props;

  return (
    <MainWrapp>
      <Header />
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Outlet />
        </Row>
      </Container>
      <Popup user={user} postAction={postAction} {...popup} />
    </MainWrapp>
  );
});

export default withData(Main);
