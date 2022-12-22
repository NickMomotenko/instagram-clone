import React from "react";

import {
  ProfileWrapp,
  GradientButton,
  StorieButton,
  ProfileHeader,
  ProfileContent,
} from "./styled";

import { Row, Block } from "../../UI/Layout";
import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";
import Avatar from "../../UI/Avatar";
import Posts from "../Posts";

const Profile = ({ user, popup, stories, posts }) => {
  const renderPostsOrText = () => {
    return posts?.length ? (
      <Posts posts={posts} />
    ) : (
      <Text text="Nothing have not post yet ;(" bold />
    );
  };

  return (
    <ProfileWrapp>
      <ProfileHeader>
        <Row center btw style={{ marginBottom: 35 }}>
          <Block>
            <Text text="Profile" style={{ fontSize: 20 }} bold />
          </Block>
          <Block>
            <DefaultButton
              text="Edit"
              style={{
                background: "transparent",
                color: "#7751518a",
                borderColor: "#7751518a",
              }}
            />
            <DefaultButton text="Direct" style={{ marginLeft: 15 }} />
          </Block>
        </Row>
        <Row>
          <Block>
            <Row style={{ marginBottom: 12 }}>
              <Avatar
                size={60}
                url={user?.avatar}
                fullname={user?.fullname}
                style={{ marginRight: 15, flexShrink: 0 }}
              />
              <Block style={{ marginTop: -5 }}>
                <Text
                  text={user?.nickname}
                  bold
                  style={{ fontSize: 20, marginBottom: 5 }}
                />
                <Text text={user?.job} color="#76777E" />
              </Block>
            </Row>
            <Block style={{ marginBottom: 35 }}>
              <Text
                text={user?.fullname}
                bold
                style={{ fontSize: 16, marginBottom: 12 }}
              />
              <Text text={user?.description} color="#76777e" />
            </Block>
            <Row style={{ justifyContent: "center" }}>
              <GradientButton
                text="Create post"
                name="test"
                onClick={() => popup.setIsActive(true)}
              />
            </Row>
          </Block>
          <Block style={{ marginLeft: 50 }}>
            <Block>
              <Block style={{ textAlign: "left" }}>
                <Text
                  text="Your stories"
                  bold
                  style={{ fontSize: "16px", marginBottom: 25 }}
                />
                <Row as="ul" style={{ marginRight: -15 }}>
                  {stories?.map((storie) => (
                    <Block
                      key={storie.id}
                      as="li"
                      style={{ flex: 1, textAlign: "center", marginRight: 15 }}
                    >
                      <StorieButton to="/">
                        <Avatar
                          noGradient
                          url={storie.image}
                          style={{ marginBottom: 6 }}
                        />
                        <Text
                          text={storie.title}
                          bold
                          style={{ fontSize: "12px" }}
                        />
                      </StorieButton>
                    </Block>
                  ))}
                </Row>
              </Block>
            </Block>
          </Block>
        </Row>
      </ProfileHeader>
      <ProfileContent>{/* {renderPostsOrText()} */}</ProfileContent>
    </ProfileWrapp>
  );
};

export default Profile;