import React from "react";

import { Switch, Route } from "react-router-dom";

import styled from "styled-components";

import { withData } from "./context/data";

import { useAuth } from "./hooks/auth";

import Login from "./pages/Login";
import Main from "./pages/Main/Main";
import Stories from "./pages/Stories";

import Direct from "./components/Direct";
import Header from "./components/Header";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = (props) => {
  const { posts } = props;

  const { login } = useAuth();

  return (
    <AppWrapp>
      {/* <Header /> */}

      <Switch>
        <Route exact path="/stories">
          <Stories />
        </Route>
        <Route exact path="/direct">
          <Direct />
        </Route>
        <Route exact path="/posts">
          <Main posts={posts} />
        </Route>
        <Route exact path="/">
          <Login login={login} />
        </Route>
      </Switch>
    </AppWrapp>
  );
};

export default withData(App);
