import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessagesIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <Container>
        <Header />

        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </AppBody>
        {sendMessagesIsOpen && <SendMail />}
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  height: 91.5vh;
`;
