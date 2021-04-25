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

const Header = () => {
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
        <Avatar />
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
