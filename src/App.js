import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import Mail from "./Mail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <Router>
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
      </Router>
    </Container>
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
