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

const App = () => {
  const data = [
    {
      id: uuid(),
      fullname: "Vidovik Rouse",
      city: "Banī Khaddāsh",
      country: "Tunisia",
      date: "Wed, 26 January 2021",
      text:
        "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
      avatar:
        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
      photo: "https://kor.ill.in.ua/m/610x385/2445521.jpg",
    },
    {
      id: uuid(),
      fullname: "Caleb Pontin",
      city: "Bokong Timur",
      country: "Indonesia",
      date: "Wed, 26 January 2021",
      text:
        "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
      avatar: "https://robohash.org/sititaquedolores.png?size=50x50&set=set1",
      photo: "https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg",
    },
    {
      id: uuid(),
      fullname: "Orelia Highnam",
      city: "Novodvinsk",
      country: "Russia",
      date: "Wed, 26 January 2021",
      text:
        "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
      avatar: "https://robohash.org/deseruntoditcum.png?size=50x50&set=set1",
      photo: "https://gorvesti.ru/files/1/2018/62278-118929-14504-1vebfhf.jpg",
    },
  ];
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
      <Main data={data} />
    </AppWrapp>
  );
};

export default App;
