import { Checkbox, IconButton } from "@material-ui/core";
import { StarOutline } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push("/mail")}>
      <Option>
        <Checkbox />
        <IconButton>
          <StarOutline />
        </IconButton>
      </Option>
      <Title>{title}</Title>
      <Message>
        <h4>
          {subject} <Description> - {description}</Description>
        </h4>
      </Message>
      <Time>{time}</Time>
    </Container>
  );
};

export default EmailRow;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  z-index: 999;

  &&:hover {
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    border: 1px solid lightgray;
    border-top: none;
  }
`;

const Option = styled.div`
  display: flex;
`;

const Title = styled.h3`
  font-size: 16px;
  flex: 0.3;
  font-weight: 550;
`;

const Message = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 14px;

  h4 {
    width: 400px;
    font-weight: 550;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // for ... at the end of long messages
    padding: 0 5px;
  }
`;

const Description = styled.span`
  font-weight: 400;
  color: gray;
`;

const Time = styled.p`
  padding-right: 15px;
  font-size: 12px;
  font-weight: bold;
`;
