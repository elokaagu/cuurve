import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { InlineWidget } from "react-calendly";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { device } from "../styles/breakpoints";

function Modal(props) {
  return (
    <ModalContainer>
      <ModalLeft>
        <IconButton>
          <StyledLink to="/">
            <CloseRounded />
          </StyledLink>
        </IconButton>
        <StartText>
          <h1>Get Started</h1>
          {/* <h2>This is the start of something special</h2> */}
          <h2>Schedule a call with us</h2>
          <TextBlock>
            <CheckCircleIcon />
            <p>
              By the end of this strategy call, you will have a clear
              understanding of the next steps you can take for your business to
              start generating consistent and reliable results online with the
              right branding and advertising solutions.
            </p>
          </TextBlock>
          <TextBlock>
            <CheckCircleIcon />
            <p>
              This is a call to see where you are at and if we can help you
              achieve your goals.
            </p>
          </TextBlock>
          <TextBlock>
            <CheckCircleIcon />
            <p>
              Find a time on our calendar to schedule your call today. We look
              forward to speaking to you soon.
            </p>
          </TextBlock>
        </StartText>
      </ModalLeft>
      <ModalRight>
        <CalendlyForm>
          <InlineWidget
            url="https://calendly.com/cuurve"
            styles={{
              // width: "550px",
              minWidth: "210px",
              height: "600px",
              borderRadius: 20,
            }}
          />
        </CalendlyForm>
      </ModalRight>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: top;
  background: white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 50px;
  position: relative;

  .MuiIconButton-root {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-bottom: 100px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: 100px;
  }
`;

const ModalLeft = styled.div`
  display: flex;
  flex: 0.5;
  padding: 20px;
`;

const StartText = styled.div`
  display: flex;
  flex-direction: column;

  .MuiSvgIcon-root {
    cursor: pointer;
    padding-right: 20px;
  }
  h1 {
    font-size: 50px;
    font-family: "Basier Circle Medium";
    color: rgb(0, 112, 243);
    padding-bottom: 50px;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 25px;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.3;
    color: rgb(25, 28, 31);
    padding-bottom: 50px;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  p {
    font-family: Roboto, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI",
      Arial, sans-serif;
    color: rgb(139, 149, 158);
    line-height: 1.4;
    font-size: 18px;
    padding-bottom: 35px;
    letter-spacing: 0;

    @media ${device.laptop} {
      width: 80%;
    }

    @media ${device.mobile} {
      font-size: 15px;
    }
  }
`;

const ModalRight = styled.div`
  flex: 0.5;
  padding: 20px;
`;

const CalendlyForm = styled.div`
  @media ${device.mobile} {
    InlineWidget {
      width: 150px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);
`;

const TextBlock = styled.div`
  display: flex;
  align-items: top;
`;
