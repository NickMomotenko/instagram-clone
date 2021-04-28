import React from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import SideBar from "../../components/SideBar";

import { Block, Row } from "../../UI/Layout";
import Post from "../../UI/Post";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";

const MainWrapp = styled.div``;

const MainList = styled.ul`
  width: 1000px;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(
    99.27deg,
    #ff1cf6 -35.3%,
    rgba(253, 96, 28, 0.74) 66.33%,
    #de2442 138.45%
  );
  border-radius: 5px;
  padding: 15px 111px;

  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  z-index: 2;

  max-width: 300px;
  /* max-height: 48px; */

  &:after {
    content: "";
    display: inline-block;
    width: 244px;
    height: 40px;

    background: linear-gradient(
      99.27deg,
      #ff1cf6 -35.3%,
      rgba(253, 96, 28, 0.74) 66.33%,
      #de2442 138.45%
    );
    filter: blur(20px);
    border-radius: 5px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;

    z-index: -1;
  }
`;

const DefaultButton = styled(Button)`
  padding: 7px 27px;
  background-color: #000000;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
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

  const stories = [
    { id: uuid(), title: "Featured", icon: "" },
    { id: uuid(), title: "Paris", icon: "" },
    { id: uuid(), title: "Food", icon: "" },
    { id: uuid(), title: "India", icon: "" },
  ];

  return (
    <MainWrapp>
      <Row>
        <MainList>
          {data?.map((post) => (
            <Post as="li" key={post.id} {...post} />
          ))}
        </MainList>
        <SideBar>
          <Block style={{ marginBottom: 12 }}>
            <Avatar
              size={90}
              as="button"
              url="https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA"
              style={{ marginBottom: 16 }}
            />
            <Text
              text="nkchaudhary01"
              bold
              style={{ fontSize: 20, marginBottom: 5 }}
            />
            <Text text="Wildlife Photographer" color="#76777E" />{" "}
          </Block>
          <DefaultButton text="Edit" />
          <Block>
            <Text text="Neelesh Chaudhary" bold style={{ fontSize: 16 }} />
            <Text
              text="www.dribbble.com/nkchaudhary01"
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/nick-momotenko-b3963b189/"
              color="#338DF7"
              bold
              style={{ fontSize: 16 }}
            />
          </Block>
          <Block style={{ margin: "45px 0" }}>
            <Text
              text="Your stories"
              bold
              style={{ fontSize: "16px", marginBottom: 25 }}
            />
            <Row as="ul">
              {stories?.map((storie) => (
                <Block
                  key={storie.id}
                  as="li"
                  style={{ width: `25%`, textAlign: "center" }}
                >
                  <Avatar size={60} noGradient />
                  <Text text={storie.title} bold style={{ fontSize: "12px" }} />
                </Block>
              ))}
            </Row>
          </Block>
          <GradientButton text="Create post" />
        </SideBar>
      </Row>
    </MainWrapp>
  );
};

export default Main;
