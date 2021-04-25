import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronRight,
  ChevronLeft,
  MoreVert,
  Refresh,
  Inbox,
  SupervisorAccount,
  LocalOffer,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Section from "./Section.js";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <Container>
      <Settings>
        <div>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </Settings>
      <Sections>
        <Section Icon={Inbox} title="Primary" color="red" selected={true} />
        <Section Icon={SupervisorAccount} title="Social" color="#1a73e8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </Sections>
      <List>
        <EmailRow
          title="Twitch"
          subject="Hey building the gmail clone."
          description="This is a test"
          time="10pm"
        />
      </List>
    </Container>
  );
};

export default EmailList;

const Container = styled.div`
  flex: 0.8;
  max-width: 1160px;
  margin-left: 5px;
  border-right: 1px solid #eee;
  overflow-y: scroll;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;

  .MuiSvgIcon-root {
    font-size: 22px !important;
  }
`;

const Sections = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 999;
`;

const List = styled.div``;
