import React from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import Post from "../../UI/Post";

import SideBar from "../../components/SideBar";
import { Row } from "../../UI/Layout";

const MainWrapp = styled.div``;

const MainList = styled.ul`
  /* columns: 3; */
  width: 1000px;
`;

const Main = () => {
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
    <MainWrapp>
      <Row>
        <MainList>
          {data.map((post) => (
            <Post as="li" key={post.id} {...post} />
          ))}
        </MainList>
        <SideBar></SideBar>
      </Row>
    </MainWrapp>
  );
};

export default Main;
