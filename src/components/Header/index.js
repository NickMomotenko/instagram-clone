import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { HeaderWrapp, HeaderAllUser, HeaderAllUserItem } from "./styled";

import { allDbUsers } from "../../redux/mockData";

import { useInput } from "../../hooks/useInput";
import { useActive } from "../../hooks/useActive";

import Container from "../Container";
import Navigation from "../Navigation";
import Logo from "../Logo";
import Burger from "../Burger";

import Avatar from "../../UI/Avatar";
import Text from "../../UI/Text";
import { Block, Row } from "../../UI/Layout";
import Input from "../../UI/Input";
import LogoutButton from "../../UI/LogoutButton";

import searchIcon from "../../assets/icons/search.svg";
import logoutIcon from "../../assets/icons/logout.png";

import { LOGUT } from "../../redux/auth/types";

const Header = () => {
  const [searchUsers, setSearchUsers] = useState([]);

  const searchInput = useInput();
  const isSearchBlock = useActive();
  const isBurgerActive = useActive();

  const dispath = useDispatch();

  React.useEffect(() => {
    searchInput?.value.length === 0
      ? isSearchBlock.setIsActive(false)
      : isSearchBlock.setIsActive(true);

    const userWithMatchedNameOrLastName = allDbUsers.filter(({ user }) => {
      const lowerCaseFullname = user?.fullname?.toLowerCase();
      return lowerCaseFullname.includes(searchInput?.value.toLowerCase());
    });

    setSearchUsers(userWithMatchedNameOrLastName);
  }, [searchInput?.value]);

  React.useEffect(() => {
    isBurgerActive.isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isBurgerActive.isActive]);

  return (
    <HeaderWrapp>
      <Container style={{ width: 1350 }}>
        <Row center btw>
          <Logo />
          <Navigation
            isActive={isBurgerActive.isActive}
            onClick={() => isBurgerActive.setIsActive(false)}
          />
          <Block style={{ position: "relative" }}>
            <Input
              value={searchInput.value}
              onChange={searchInput.onChange}
              onFocus={searchInput.onFocus}
              placeholder="Search..."
              icon={searchIcon}
              noError
            />
            {isSearchBlock.isActive && (
              <HeaderAllUser as="ul">
                {searchUsers?.map(
                  ({ user: { avatar, fullname, city, id } }) => (
                    <HeaderAllUserItem key={id} as="li">
                      <Avatar
                        size={25}
                        textSize={13}
                        avatar={avatar}
                        fullname={fullname}
                      />
                      <Block style={{ marginLeft: 11, marginTop: -5 }}>
                        <Text text={fullname} bold />
                        <Text text={city} style={{ color: "#76777E" }} />
                      </Block>
                    </HeaderAllUserItem>
                  )
                )}
              </HeaderAllUser>
            )}
          </Block>
          <Row center>
            <LogoutButton
              icon={logoutIcon}
              onClick={(e) => {
                e.preventDefault();
                // logOut();
                dispath({ type: LOGUT });
              }}
            />
            <Burger
              isActive={isBurgerActive.isActive}
              onClick={() =>
                isBurgerActive.setIsActive(!isBurgerActive.isActive)
              }
              style={{ marginLeft: 18 }}
            />
          </Row>
        </Row>
      </Container>
    </HeaderWrapp>
  );
};

export default Header;
