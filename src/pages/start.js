import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

function start(props) {
  return (
    <AppContainer>
      <AppBody>
        <StartContainer>
          <StartLeft>
            <StartText>
              <h1>This is the start of something special</h1>
              <StyledLink to="/">
                <p>Sign up here</p>
              </StyledLink>
            </StartText>
            <StartForm>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="text" placeholder="Email" />
            </StartForm>
          </StartLeft>
          <StartRight>
            <CalendlyForm>
              <h1>Calendly Integration</h1>
            </CalendlyForm>
          </StartRight>
        </StartContainer>
      </AppBody>
    </AppContainer>
  );
}

export default start;

const AppContainer = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgb(11, 4, 17),
    rgb(11, 4, 17) 50%,
    rgb(17, 17, 24) 0px
  );
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;

  h1 {
    width: 80%;
  }
`;

const StartContainer = styled.div`
  display: flex;
  font-family: "Basier Circle Semibold";
  letter-spacing: -0.1rem;
  font-size: 16px;
  margin-top: 50px;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
`;

const StartText = styled.div`
  padding: 20px;
  h1 {
    font-size: 30px;
    cursor: pointer;
    width: 500px;
    font-weight: 500;
    line-height: 1.217;
    color: #fff;
    padding-bottom: 20px;
    cursor: pointer;
  }

  p {
    font-size: 30px;
    font-family: "Basier Circle Medium";
    color: rgb(0, 112, 243);
    padding-bottom: 50px;
    cursor: pointer;
  }
`;

const StartForm = styled.form`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  width: 450px;
  border: none;
  outline: none;
`;

const CalendlyForm = styled.div`
  color: white;
`;

const StartLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
