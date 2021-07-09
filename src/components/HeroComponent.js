import React from "react";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

function HeroComponent({ title, subtitle }) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>{title}</h1>
      </HeroText>
      <HeroSubtext>
        <p>{subtitle}</p>
      </HeroSubtext>
    </HeroContainer>
  );
}

export default HeroComponent;

const HeroContainer = styled.div`
  display: grid;
  align-items: top;
  padding-bottom: 100px;
`;

const HeroText = styled.div`
  font-family: "Basier Circle Medium";
  box-sizing: border-box;
  font-weight: 100;
  font-size: 1.0625rem;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: rgba(25, 28, 31, 0.7);
  position: relative;
  white-space: pre-wrap;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  padding-bottom: 20px;

  h1 {
    font-size: 80px;
    font-weight: 100;
    letter-spacing: -0.025em;
    overflow-wrap: break-word;
    color: rgb(25, 28, 31);
    white-space: pre-wrap;
    word-break: break-word;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    padding: 20px;

    @media ${device.tablet} {
      font-size: 60px;
      letter-spacing: -0.03em;
    }

    @media ${device.mobile} {
      font-size: 50px;
      letter-spacing: -0.03em;
      line-height: 50px;
      padding-bottom: 30px;
    }
  }
`;

const HeroSubtext = styled.div`
  margin: 0 auto;
  width: 50%;
  line-height: 1.4;
  padding: 20px;

  p {
    font-family: Roboto, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI",
      Arial, sans-serif;
    font-size: 20px;
    color: rgb(139, 149, 158);
    text-align: center;
  }
`;
