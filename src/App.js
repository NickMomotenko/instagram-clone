import React from "react";

import styled from "styled-components";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

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
import { useSelector } from "react-redux";
import Edit from "./components/Edit";
import EditGeneral from "./components/Edit/EditGeneral";
import EditPosts from "./components/Edit/EditPosts";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const isPreloaderActive = useActive();
  const popup = usePopup();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuth) {
      // navigate(`${baseRoutes.base}`);
    } else {
      // navigate(`${baseRoutes.direct}`);
      // navigate(`${baseRoutes.profile}`);
    }
  }, [isAuth]);

  // delay timer in sec
  const delayTimer = 3;

  React.useEffect(() => {
    setTimeout(() => isPreloaderActive.setIsActive(true), delayTimer * 1000);
  }, []);

  return (
    <AppWrapp>
      {/* <Preloader isActive={isPreloaderActive.isActive} /> */}

      <Routes>
        <Route path={baseRoutes.stories} element={<Stories />} />
        <Route path={baseRoutes.direct} element={<Direct />} />
        <Route
          path={baseRoutes.login}
          element={<Login isPreloaderActive={isPreloaderActive.isActive} />}
        >
          <Route path="" element={<LoginBlock />} />
          <Route path={authRoutes.create} element={<CreateNewAccount />} />
          <Route path={authRoutes.forgot} element={<ForgotPassword />} />
        </Route>
        <Route path={baseRoutes.base} element={<Main popup={popup} />}>
          <Route path="" element={<Posts />} />
          <Route path={baseRoutes.profile} element={<Profile popup={popup} />}>
            <Route path="edit" element={<Edit />}>
              <Route path="general" element={<EditGeneral />} />
              <Route path="posts" element={<EditPosts />} />
            </Route>
          </Route>
        </Route>
        {/* <Route path="*" element={<Navigate to={baseRoutes.login} replace />} /> */}
      </Routes>
    </AppWrapp>
  );
};

export default App;
