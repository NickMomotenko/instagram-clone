import React from "react";

import styled from "styled-components";

import { Route, Routes } from "react-router-dom";

import { withData } from "./context/data";

import { useActive } from "./hooks/useActive";

import Login from "./pages/Login";
import Main from "./pages/Main/Main";
import Stories from "./pages/Stories";
import Preloader from "./pages/Preloader";

import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Direct from "./components/Direct";

import { baseRoutes } from "./helpers/base-routes";

import { DataContext } from "./context/data";
import { useSelector } from "react-redux";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const posts = useSelector((state) => state.posts.posts);

  const isPreloaderActive = useActive();

  const {
    postAction,
    userData: { user, stories },
  } = React.useContext(DataContext);

  // delay timer in sec
  const delayTimer = 3;

  React.useEffect(() => {
    setTimeout(() => isPreloaderActive.setIsActive(true), delayTimer * 1000);
  }, []);

  return (
    <AppWrapp>
      <Preloader isActive={isPreloaderActive.isActive} />

      <Routes>
        <Route path={baseRoutes.stories} element={<Stories />} />
        <Route path={baseRoutes.direct} element={<Direct />} />
        <Route
          path={baseRoutes.login}
          element={<Login isPreloaderActive={isPreloaderActive.isActive} />}
        />
        <Route path={baseRoutes.base} element={<Main />}>
          <Route
            path={baseRoutes.posts}
            element={<Posts posts={posts} postAction={postAction} />}
          />
          <Route
            path={baseRoutes.profile}
            element={<Profile user={user} posts={[]} stories={stories} />}
          />
        </Route>
      </Routes>
    </AppWrapp>
  );
};

export default withData(App);
