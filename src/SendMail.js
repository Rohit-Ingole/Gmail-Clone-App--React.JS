import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import db from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <Container>
      <Header>
        <h3>New Message</h3>
        <Close onClick={() => dispatch(closeSendMessage())} />
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="mailError">*to is required</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="mailError">*subject is required</p>}
        <input
          type="text"
          className="mailMessage"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="mailError">*message is required</p>}
        <Button
          className="sendButton"
          variant="contained"
          color="primary"
          type="submit"
        >
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default SendMail;

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 60%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  z-index: 999;
`;

const Header = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  h3 {
    color: whitesmoke;
    font-size: 13px;
  }

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;

  input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }

  .sendButton {
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
  }

  .mailMessage {
    flex: 1;
  }

  .mailError {
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;
    font-size: 13px;
  }
`;
