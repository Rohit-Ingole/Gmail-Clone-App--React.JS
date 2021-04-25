import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <InnerContainer>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button onClick={signIn}>
          <img
            src="https://www.alltechits.com/images/easyblog_shared/June_2018/6-18-18/gsuite_overhaul_400.jpg"
            alt=""
            className="Gimg"
          />
          <p>Sign in with Google</p>
        </Button>
      </InnerContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const InnerContainer = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid lightgray;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.24);

  img {
    height: 50vh;
    border-radius: 5px;
  }

  .Gimg {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-right: 5px;
  }

  .MuiButton-root {
    background-color: #0099ff;
    text-transform: inherit;
    padding: 2px;
  }

  .MuiButton-root:hover {
    background-color: #0099ff;
  }

  p {
    color: white;
    font-size: 16px;
    margin-right: 5px;
  }
`;
