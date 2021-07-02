import React from "react";
import styled from "styled-components";

function HeroComponent(props) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>One tool for all things real estate</h1>
      </HeroText>
      <HeroSubtext>
        <p>
          From high quality lead generation and branding, to propsectve client
          nurturing tools, Cuurve helps real estate agents get more from their
          money
        </p>
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
