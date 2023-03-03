import { FC } from "react";
import styled from "styled-components";
import Button from "../components/UI/Button";
import Checkbox from "../components/UI/Checkbox";
import Input from "../components/UI/Input";
import Label from "../components/UI/Label";
import Line from "../components/UI/Line";
import Text from "../components/UI/Text";
import Title from "../components/UI/Title";
import colors from "../constants/colors";

const Login: FC<any> = (props) => {
  return (
    <Container>
      <StyledFrame style={{ left: 0 }}></StyledFrame>
      <StyledFrame
        style={{ right: 0, backgroundColor: "white", color: "black" }}
      >
        <StyledForm>
          <Title text="Account Login" />
          <Text
            text="If you are already a member you can login with your email address
            and password."
          />
          <Line />
          <Label text="email" />
          <Input type="email" />
          <Label text="password" />
          <Input type="password" />
          <Checkbox text={"Remember me"} />
          <Button text="Login" />
          <TextBlock>
            <Text
              text="Dont have an account ?"
              link
              myHref="/registration"
              linkText="Sign up here"
            />
          </TextBlock>
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

const TextBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 25px;
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

export default Login;
