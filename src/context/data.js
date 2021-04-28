import React, { useState } from "react";

import { v4 as uuid } from "uuid";

const posts = [
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

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
      nickname: "nkchaudhary01",
      fullname: "Neelesh Chaudhary",
      doing: "Wildlife Photographer",
      description:
        "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.",
      links: [
        {
          id: uuid(),
          title: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
          link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
        },
      ],
    },
    posts: [
      {
        id: uuid(),
        text:
          "If you've ever seen text-only images on other people's Instagram stories or or posts, you may have wondered exactly how they made those. Are those images made by a third-party app? Or are they something you can do within Instagram?",
        comments: [
          {
            id: uuid(),
            user: {},
          },
        ],
      },
      {
        id: uuid(),
        text:
          "Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected. He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence. John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched. Improved so strictly produced answered elegance is. ",
        comments: [
          {
            id: uuid(),
            user: {},
          },
        ],
      },
    ],
    stories: [
      {
        image: "https://robohash.org/nisiomnisquo.png?size=50x50&set=set1",
        id: uuid(),
        title: "Brother",
      },
      {
        image: "https://robohash.org/enimcumadipisci.png?size=50x50&set=set1",
        id: uuid(),
        title: "Robo",
      },
      {
        image:
          "https://robohash.org/placeatcumquefacilis.png?size=50x50&set=set1",
        id: uuid(),
        title: "RoboShit",
      },
      {
        image:
          "https://robohash.org/officiatemporadolorem.png?size=50x50&set=set1",
        id: uuid(),
        title: "Paris",
      },
    ],
    saved: [],
    likes: [],
  });

  return (
    <DataContext.Provider value={{ userData, setUserData, posts }}>
      {children}
    </DataContext.Provider>
  );
};

export const withData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DataContext.Consumer>
      );
    }
  };
};
