import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  Image,
  Body,
  Input,
  Footer,
  Anchor,
  Button,
} from "./SignInElements";

import topLogo from "../../assests/logo.png";

const SignIn = () => {
  const navigate = useNavigate();

  const signed = () => {
    navigate("/");
  };

  const home = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <Header>
          <Logo>
            <Image src={topLogo} onClick={home} alt="ButMeIt" />
          </Logo>
          Sign In
        </Header>
        <Body>
          <Input type="text" placeholder="Username or Email" />
          <Input type="password" placeholder="Password" />
          <Anchor to="/" className="forgetPassword">
            Forgot Password?
          </Anchor>
        </Body>
        <Footer>
          <Button type="submit" onClick={signed}>
            {" "}
            Sign In{" "}
          </Button>
          <Anchor to="/signup" className="shift">
            Do not have an account? <span> Sign Up here </span>{" "}
          </Anchor>
        </Footer>
      </Container>
    </>
  );
};

export default SignIn;
