import React from "react";

import { Switch, Route } from "react-router-dom";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const AppWrapp = styled.div``;

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

const App = () => {
  return (
    <AppWrapp>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.id}
            path={route.path}
            components={route.component}
          />
        ))}
      </Switch>
      <Main />
    </AppWrapp>
  );
};

export default App;
