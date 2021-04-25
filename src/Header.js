import React from "react";
import styled from "styled-components";
import {
  SettingsOutlined,
  Apps,
  ArrowDropDown,
  HelpOutline,
  Menu,
  Search,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };

  return (
    <Container>
      <HeaderLeft>
        <IconButton>
          <Menu />
        </IconButton>
        <Img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </HeaderLeft>
      <HeaderMiddle>
        <Search />
        <Input type="text" placeholder="Search mail" />
        <ArrowDropDown />
      </HeaderMiddle>
      <HeaderRight>
        <HelpOutline />
        <SettingsOutlined />
        <Apps />
        <SignOut>
          <Avatar src={user.photoUrl}>{user.displayName[0]}</Avatar>
          <DropDown onClick={signOut}>
            <span>Sign out</span>
          </DropDown>
        </SignOut>
      </HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  height: 48px;
  padding: 8px;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 238px;
  flex: 0.1;
  align-items: center;
  margin-left: 4px;
  padding-right: 30px;
`;

const Img = styled.img`
  object-fit: contain;
  height: 40px;
  margin-left: 5px;
`;

const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  background-color: whitesmoke;
  margin-left: 10px;
  margin-right: 30px;
  border-radius: 5px;
  height: 48px;
  max-width: 722px;

  .MuiSvgIcon-root {
    color: gray;
    padding: 8px;
    margin: 3px;
    width: 46px;
    padding: 5px;
  }
`;

const Input = styled.input`
  height: 48px;
  flex: 1;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 16px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 180px;
  flex: 0.2;
  margin-right: 5px;

  .MuiSvgIcon-root {
    color: gray;
    width: 44px !important;
  }

  .MuiAvatar-colorDefault {
    color: white;
    margin-left: 5px;
    width: 32px !important;
    height: 32px !important;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: whitesmoke;
  z-index: 999;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
