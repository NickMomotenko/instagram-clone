import React from "react";

import { Switch, Route } from "react-router-dom";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SideBar from "./components/SideBar";
import Avatar from "./UI/Avatar";
import Text from "./UI/Text";
import Button from "./UI/Button";
import Header from "./components/Header";
import { withData } from "./context/data";

const AppWrapp = styled.div`
  /* display: flex; */
`;

const routes = [
  {
    id: uuid(),
    path: "/",
    component: <Login />,
  },
  {
    id: uuid(),
    path: "/main",
    component: <Main />,
  },
];

const App = (props) => {
  const { posts } = props;

  return (
    <AppWrapp>
      {/* <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            components={route.component}
          />
        ))}
      </Switch> */}
      <Header />
      <Main posts={posts} />
    </AppWrapp>
  );
};

export default withData(App);
