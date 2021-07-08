import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { InlineWidget } from "react-calendly";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";

function Modal(props) {
  return (
    <ModalContainer>
      <ModalLeft>
        <IconButton>
          <StyledLink to="/">
            <ChevronLeftIcon />
          </StyledLink>
        </IconButton>
        <StartText>
          <p>Get started</p>
          <h1>This is the start of something special</h1>
          <span>
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with Funnels & Paid
            Advertising. Find a time on Dany’s calendar to schedule your call
            today and we look forward to speaking to you soon!
          </span>
        </StartText>
      </ModalLeft>
      <ModalRight>
        <CalendlyForm>
          <InlineWidget
            url="https://calendly.com/cuurve"
            styles={{
              width: "550px",
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
`;

const ModalLeft = styled.div`
  display: flex;
  flex: 0.5;
  padding: 20px;
`;

const StartText = styled.div`
  h1 {
    font-size: 30px;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.3;
    color: black;
    padding-bottom: 20px;
    cursor: pointer;
  }

  p {
    font-size: 50px;
    font-family: "Basier Circle Medium";
    color: rgb(0, 112, 243);
    padding-bottom: 50px;
    cursor: pointer;
  }
  span {
    font-size: 20px;
    font-family: "Basier Circle Regular";
    color: black;
    line-height: 1.3;
    cursor: pointer;
  }
`;

const ModalRight = styled.div`
  flex: 0.5;
  padding: 20px;
`;

const CalendlyForm = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);
`;
