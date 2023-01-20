import styled from "styled-components";

import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import { Block, Row } from "../../UI/Layout";

export const ProfileWrapp = styled.div``;

export const ProfileHeader = styled.div`
  width: 60%;
  border: 1px solid #ebf1fb;
  padding: 30px;
  margin: 0 auto;

  background-color: #fff;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const ProfileContent = styled(Row)`
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProfileInfo = styled(Block)``;

export const ProfileStories = styled(Block)`
  margin-left: 50px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const GradientButton = styled(Button)`
  background: linear-gradient(
    99.27deg,
    #ff1cf6 -35.3%,
    rgba(253, 96, 28, 0.74) 66.33%,
    #de2442 138.45%
  );
  border-radius: 5px;
  padding: 15px;

  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  z-index: 2;

  max-width: 300px;
  width: 100%;

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

export const ButtonWithLink = styled(Link)``;

export const StorieButton = styled(Link)`
  display: block;
`;
