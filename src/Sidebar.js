import { Button } from "@material-ui/core";
import {
  ExpandMore,
  Inbox,
  InsertDriveFile,
  AccessTime,
  Send,
  Star,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <Container>
      <Button className="sidebar__composeButton">
        <Img src="https://fonts.gstatic.com/s/i/productlogos/gsuite_addons/v6/web-64dp/logo_gsuite_addons_color_2x_web_64dp.png" />
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={64} />
      <SidebarOption Icon={Star} title="Inbox" number={64} />
      <SidebarOption Icon={AccessTime} title="Inbox" number={64} />
      <SidebarOption Icon={Send} title="Inbox" number={64} />
      <SidebarOption Icon={InsertDriveFile} title="Inbox" number={64} />
      <SidebarOption
        Icon={ExpandMore}
        title="Inbox"
        number={64}
        showNumber={false}
      />
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
`;

const Img = styled.img`
  height: 35px;
  width: auto;
`;
