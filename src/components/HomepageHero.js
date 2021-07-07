import React from "react";
import styled from "styled-components";

function HomepageHero(props) {
  return (
    <HeroContainer>
      <HeroText>
        <h1>
          One solution, <br />
          all things real estate
        </h1>
        Curate high quality leads for your properties, and make your money go
        further with next generation targeting and retargeting technologies{" "}
        <HeroButton>
          <span>Get started</span>
        </HeroButton>
      </HeroText>
      <HeroImage
        // src="https://drive.google.com/uc?export=view&id=1PRoLtF4rOTaEMbVnawEOAxe3JsRxK1zV"
        src="https://drive.google.com/uc?export=view&id=1qyHYuhc4B3efIPd3B5Hagh6sIeowh44p"
        // src="https://drive.google.com/uc?export=view&id=1XyOelkvss1nGe7CI6GKuClkR32GA2uiJ"
        // alt="heroImage"
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
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  white-space: pre-wrap;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  h1 {
    font-size: 96px;
    line-height: 104px;
    font-weight: 100;
    letter-spacing: -0.4rem;
    padding-bottom: 20px;
    overflow-wrap: break-word;
    color: rgb(25, 28, 31);
    /* color: white; */
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const HeroImage = styled.img`
  object-fit: contain;
  width: 600px;
`;

const HeroButton = styled.button`
  width: 25%;
  background-color: rgb(25, 28, 31);
  color: white;
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;

  span {
    font-family: "Basier Circle Medium";
    font-size: 18px;
  }
`;
