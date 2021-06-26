import React from "react";
import styled from "styled-components";

function HomepageHero(props) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>
          Lead generation <br />
          for real estate
        </h1>
        Curate high quality leads for your properties, and make your money go
        further with next generation targeting and retargeting technologies
      </HeroText>
      <HeroImage
        src="https://drive.google.com/uc?export=view&id=1PRoLtF4rOTaEMbVnawEOAxe3JsRxK1zV"
        alt="mockup"
      />
    </HeroContainer>
  );
}

export default HomepageHero;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: left;
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
  word-break: break-word;
  h1 {
    font-size: 96px;
    line-height: 104px;
    font-weight: 100;
    letter-spacing: -0.4rem;
    padding-bottom: 20px;
    overflow-wrap: break-word;
    color: rgb(25, 28, 31);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const HeroImage = styled.img`
  object-fit: contain;
  width: 600px;
`;