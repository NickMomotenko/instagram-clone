import React from "react";

import { Switch, Route } from "react-router-dom";

import styled from "styled-components";
// import Stories from "react-insta-stories";

import { withData } from "./context/data";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Stories from "./pages/Stories";

import Direct from "./components/Direct";
import Header from "./components/Header";
import { Block } from "./UI/Layout";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = (props) => {
  const { posts } = props;
  const stories = [
    {
      duration: 5000,
      content: (props) => (
        <div style={{ background: "pink", padding: 20 }}>
          <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
  ];

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
          <Login />
        </Route>
      </Switch>
    </AppWrapp>
  );
};

export default withData(App);
