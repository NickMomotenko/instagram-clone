import React from "react";

import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { useActive } from "./hooks/useActive";
import { usePopup } from "./hooks/popup";

import Login from "./pages/Login";
import Main from "./pages/Main/Main";
import Stories from "./pages/Stories";
import Preloader from "./pages/Preloader";

import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Direct from "./components/Direct";

import LoginBlock from "./components/LoginForm/LoginBlock";
import ForgotPassword from "./components/LoginForm/ForgotPassword";
import CreateNewAccount from "./components/LoginForm/CreateNewAccount";

import { baseRoutes, authRoutes } from "./helpers/base-routes";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const isPreloaderActive = useActive();
  const popup = usePopup();

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
        >
          <Route
            path=''
            element={<LoginBlock login={() => {}} />}
          />
          <Route path={authRoutes.create} element={<CreateNewAccount />} />
          <Route path={authRoutes.forgot} element={<ForgotPassword />} />
        </Route>
        <Route path={baseRoutes.base} element={<Main popup={popup} />}>
          <Route path={baseRoutes.posts} element={<Posts />} />
          <Route
            path={baseRoutes.profile}
            element={<Profile popup={popup} />}
          />
        </Route>
      </Routes>
    </AppWrapp>
  );
};

export default App;
