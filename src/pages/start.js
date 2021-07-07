import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { InlineWidget } from "react-calendly";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";

function start(props) {
  return (
    <>
      <title>Get Started | Cuurve</title>
      <AppContainer>
        <AppBody>
          <StartContainer>
            <IconButton>
              <StyledLink to="/">
                <ChevronLeftIcon />
              </StyledLink>
            </IconButton>
            <StartText>
              <p>Get started</p>
              <h1>This is the start of something special</h1>
              <span>
                By the end of this Audit call, you will have a clear
                understanding of the next steps you can take for your business
                to start generating consistent and reliable results online with
                Funnels & Paid Advertising. Find a time on Dany’s calendar to
                schedule your call today and we look forward to speaking to you
                soon!
              </span>
            </StartText>
            <CalendlyForm>
              <InlineWidget
                url="https://calendly.com/cuurve"
                styles={{
                  width: "400px",
                  height: "600px",
                  borderRadius: 20,
                }}
              />
            </CalendlyForm>
          </StartContainer>
        </AppBody>
      </AppContainer>
    </>
  );
}

export default start;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: left;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
`;

const StartContainer = styled.div`
  display: flex;
  font-family: "Basier Circle Semibold";
  letter-spacing: -0.1rem;
  font-size: 16px;
  margin-top: 50px;
  padding: 20px;
  width: 100%;

  .MuiIconButton-root {
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    align-items: left;
  }
`;

const StartText = styled.div`
  padding: 20px;
  width: 40%;

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
  span {
    font-size: 20px;
    font-family: "Basier Circle Regular";
    color: white;
    padding-bottom: 50px;
    line-height: 1.3;
    cursor: pointer;
  }
`;

const CalendlyForm = styled.div`
  color: white;
  padding: 20px;
  h1 {
    padding-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
