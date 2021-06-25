import React from "react";
import styled from "styled-components";

function HeroSection(props) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Lead generation for real estate agents</h1>
        <h2>
          Open a free account in minutes right from your phone, and make your
          money go further
        </h2>
      </HeroText>
    </HeroContainer>
  );
}

export default HeroSection;

const HeroContainer = styled.div``;

const HeroText = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 800;
    align-items: center;
    text-align: center;
    color: black;
  }
  h2 {
    font-size: 20px;
    font-weight: 800;
    align-items: center;
    text-align: center;
  }
`;
