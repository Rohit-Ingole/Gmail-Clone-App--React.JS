import { Button } from "@material-ui/core";
import {
  ExpandMore,
  Inbox,
  InsertDriveFile,
  AccessTime,
  Send,
  Star,
  Videocam,
  Keyboard,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openSendMessage } from "./features/mailSlice";
import SidebarOption from "./SidebarOption";
import db from "./firebase";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <Container>
      <Button
        className="sidebar__composeButton"
        onClick={() => dispatch(openSendMessage())}
      >
        <Img src="https://fonts.gstatic.com/s/i/productlogos/gsuite_addons/v6/web-64dp/logo_gsuite_addons_color_2x_web_64dp.png" />
        Compose
      </Button>

      <SidebarTop>
        <SidebarOption Icon={Inbox} title="Inbox" number={emails.length} />
        <SidebarOption Icon={Star} title="Starred" number={emails.length} />
        <SidebarOption
          Icon={AccessTime}
          title="Snoozed"
          number={emails.length}
        />
        <SidebarOption
          Icon={Send}
          title="Sent"
          number={emails.length}
          selected
        />
        <SidebarOption
          Icon={InsertDriveFile}
          title="Drafts"
          number={emails.length}
        />
        <SidebarOption Icon={ExpandMore} title="Inbox" showNumber={false} />
      </SidebarTop>
      <SideBarMiddle>
        <p className="meetText">Meet</p>
        <SidebarOption Icon={Videocam} title="New meeting" showNumber={false} />
        <SidebarOption
          Icon={Keyboard}
          title="Join a meeting"
          showNumber={false}
        />
      </SideBarMiddle>
      <SidebarBottom>
        <BottomInnerContainer>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/wbt/contacts_icon21.png"
            alt=""
            className="personImage"
          />
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/wbt/hangouts_icon21.png"
            alt=""
            className="hangoutImage"
          />
        </BottomInnerContainer>
      </SidebarBottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  flex: 0.2;
  max-width: 256px;

  .sidebar__composeButton {
    text-transform: inherit;
    padding: 0 !important;
    width: 145px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 999px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 1px 3px 1px rgba(60, 64, 67, 0.149);
    margin: 16px 0px 18px 8px;
    color: #3c4043;
  }

  .sidebar__composeButton:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302),
      0 4px 8px 3px rgba(60, 64, 67, 0.149);
  }

  .meetText {
    margin-left: 26px;
    font-weight: 600;
    font-size: 0.88rem;
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  height: 35px;
  width: auto;
`;

const SidebarTop = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
`;
const SideBarMiddle = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

const SidebarBottom = styled.div`
  border-bottom: 1px solid #eee;
  display: grid;
  place-items: center;
  padding: 5px 0;
`;

const BottomInnerContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
