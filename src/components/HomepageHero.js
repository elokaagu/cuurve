import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
        <StyledLink to="/start">
          <HeroButton>
            <span>Get started</span>
          </HeroButton>
        </StyledLink>
      </HeroText>
      <HeroImage
        src="https://storage.googleapis.com/cuurveimages/launchpad.png"
        alt="heroImage"
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
  font-size: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 96px;
    line-height: 104px;
    font-weight: 100;
    letter-spacing: -0.4rem;
    padding-bottom: 20px;
    /* color: rgb(25, 28, 31); */
    /* color: white; */
    -webkit-background-clip: text;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
    -webkit-line-clamp: 6;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-attachment: scroll;
    background-clip: text;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      90deg,
      rgb(111, 1, 156) 0%,
      rgb(198, 1, 126) 135.12%
    );
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
