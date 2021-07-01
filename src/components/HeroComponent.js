import React from "react";
import styled from "styled-components";

function HeroComponent(props) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>About us</h1>
      </HeroText>
      <HeroSubtext>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          elementum magna. Vivamus dictum placerat dui commodo tristique. Mauris
          suscipit ultrices dapibus. Ut nec vestibulum neque. Praesent
          convallis, felis et pellentesque ultricies, lectus turpis pellentesque
          erat, sit amet dignissim neque neque eu leo. Morbi vestibulum mi ut
          metus ornare, ac bibendum mi porttitor. Curabitur euismod porta dui id
          tempus. Nullam sodales sagittis justo, vitae gravida elit condimentum
          id.
        </p>
      </HeroSubtext>
    </HeroContainer>
  );
}

export default HeroComponent;

const HeroContainer = styled.div`
  display: grid;
  align-items: top;
`;

const HeroText = styled.div`
  font-family: "Basier Circle Medium";
  box-sizing: border-box;
  font-weight: 100;
  font-size: 1.0625rem;
  line-height: 1.411764705882353;
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
    line-height: 104px;
    font-weight: 100;
    letter-spacing: -0.4rem;
    overflow-wrap: break-word;
    color: rgb(25, 28, 31);
    white-space: pre-wrap;
    word-break: break-word;
    text-align: center;
  }
`;

const HeroSubtext = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: rgb(139, 149, 158);
  max-width: 1000px;
  text-align: justify;
  box-sizing: border-box;
  line-height: 1.65;
  outline-color: initial;
  outline-style: none;
  outline-width: initial;
  font-family: "Basier Circle Regular";
  align-items: top;
  padding-bottom: 20px;
`;
