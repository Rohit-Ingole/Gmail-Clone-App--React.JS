import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Mail = () => {
  const history = useHistory();
  return (
    <Container>
      <MailTools>
        <ToolsLeft>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </ToolsLeft>
        <ToolsRight>
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </ToolsRight>
      </MailTools>
      <MailBody>
        <MailBodyHeader>
          <h2>Subject</h2>
          <LabelImportant className="mailImportant" />
          <p>Title</p>
          <p className="mailTime">10pm</p>
        </MailBodyHeader>
        <MailBodyMessage>
          <p>This is a message.</p>
        </MailBodyMessage>
      </MailBody>
    </Container>
  );
};

export default Mail;

const Container = styled.div`
  flex: 0.8;
  max-width: 1160px;
  margin-left: 5px;
  border-right: 1px solid #eee;
  background-color: whitesmoke;
`;

const MailTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const ToolsLeft = styled.div`
  display: flex;

  .MuiSvgIcon-root {
    font-size: 22px !important;
  }
`;

const ToolsRight = styled.div`
  .MuiSvgIcon-root {
    font-size: 22px !important;
  }
`;

const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  margin: 30px;
  margin-bottom: 0;
  height: 72vh;
  padding: 20px;
`;

const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 20px;
  position: relative;

  .mailImportant {
    color: #e8ab02 !important;
  }

  h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  p {
    margin-left: 20px;
  }

  .mailTime {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: gray;
  }
`;

const MailBodyMessage = styled.div`
  padding: 10px;
  margin-right: 20px;
  overflow-wrap: break-word;
`;
