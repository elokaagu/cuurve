import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

function InfoBanner({
  headline,
  subtitle,
  text,
  button,
  backgroundImage,
  backgroundColor,
  backgroundPosition,
}) {
  return (
    <InfoContainer
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <InfoText>
        <h1>{headline}</h1>
        {subtitle}
        <p>{text}</p>
      </InfoText>

      <StyledLink to="/start">
        <InfoButton>
          <span>{button}</span>
        </InfoButton>
      </StyledLink>
    </InfoContainer>
  );
}

export default InfoBanner;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  padding: 30px;
  height: 350px;
  background-color: rgb(25, 28, 31);

  border-radius: 30px;
  cursor: pointer;
`;

const InfoText = styled.div`
  font-family: "Basier Circle Medium";
  box-sizing: border-box;
  font-weight: 100;
  font-size: 1.0625rem;
  line-height: 1.411764705882353;
  letter-spacing: -0.025em;
  color: rgb(6, 102, 235);
  position: relative;
  white-space: pre-wrap;
  font-size: 25px;
  margin-top: 50px;
  word-break: break-word;
  h1 {
    font-size: 50px;
    line-height: 40px;
    font-weight: 100;
    letter-spacing: -0.1rem;
    margin-bottom: 20px;
    overflow-wrap: break-word;
    padding-bottom: 10px;
    /* color: rgb(25, 28, 31); */
    color: #fff;
    white-space: pre-wrap;
    word-break: break-word;
  }
  p {
    color: white;
    width: 50%;
    font-family: "Basier Circle Regular";
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const InfoButton = styled.button`
  max-width: 150px;
  color: white;
  border: none;
  background-color: rgb(6, 102, 235);
  margin-top: 20px;
  border-radius: 999px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    font-family: "Basier Circle Medium";
    font-size: 18px;
    color: white;
  }
  :hover {
    opacity: 80%;
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
