import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Container>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const AppBody = styled.div`
  display: flex;
`;
