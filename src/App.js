import React from "react";

import styled from "styled-components";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useActive } from "./hooks/useActive";

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
import Edit from "./components/Edit";
import EditGeneral from "./components/Edit/EditGeneral";
import EditPosts from "./components/Edit/EditPosts";

import { baseRoutes, authRoutes } from "./helpers/base-routes";

import { useDispatch, useSelector } from "react-redux";


import { SET_LOCATION_PATH } from "./redux/auth/types";
import { SET_PRELOADER_STATUS } from "./redux/app/types";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const { isAuth, locationPath } = useSelector((state) => state.auth);
  const { isPreloaderActive } = useSelector((state) => state.app);

  const popup = useActive();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isAuth) {
      navigate(locationPath === "/auth" ? `${baseRoutes.login}` : locationPath);
    } else {
      navigate(locationPath === "/auth" ? `${baseRoutes.base} ` : locationPath);
    }
  }, [isAuth, locationPath]);

  React.useEffect(() => {
    dispatch({ type: SET_LOCATION_PATH, payload: window.location.pathname });
  }, [window.location.pathname]);

  // delay timer in sec
  const delayTimer = 3;

  React.useEffect(() => {
    dispatch({ type: SET_PRELOADER_STATUS, payload: false });

    setTimeout(() => {
      dispatch({ type: SET_PRELOADER_STATUS, payload: true });
    }, delayTimer * 1000);
  }, []);

  return (
    <AppWrapp>
      {/* <Preloader isActive={isPreloaderActive} /> */}

      <Routes>
        <Route path={baseRoutes.stories} element={<Stories />} />
        <Route path={baseRoutes.direct} element={<Direct />} />
        <Route
          path={baseRoutes.login}
          element={<Login isPreloaderActive={isPreloaderActive} />}
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
        <Route path="*" element={<Navigate to={baseRoutes.login} replace />} />
      </Routes>
    </AppWrapp>
  );
};

export default App;
