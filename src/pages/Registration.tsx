import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowButton from "../components/ArrowButton";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Label from "../components/UI/Label";
import Line from "../components/UI/Line";
import Text from "../components/UI/Text";
import Title from "../components/UI/Title";
import colors from "../constants/colors";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <StyledFrame style={{ left: 0 }}></StyledFrame>
      <StyledFrame
        style={{ right: 0, backgroundColor: "white", color: "black" }}
      >
        <ArrowButton
          onClick={() => {
            navigate("/login");
          }}
        />
        <StyledForm>
          <Title text="Account Signup" />
          <Text text="Become a member and enjoy exclusive promotions." />
          <Line />
          <Label text="surname" />
          <Input type="text" />
          <Label text="name" />
          <Input type="text" />
          <Label text="email" />
          <Input type="email" />
          <Label text="password" />
          <Input type="password" />
          <Button text="Registration" />
        </StyledForm>
      </StyledFrame>
    </Container>
  );
};

const StyledFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 410px;
  margin: 10px 10px 10px 10px;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${colors.blue};
  color: ${colors.white};
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export default Registration;
