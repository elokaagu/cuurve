import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

function Footer(props) {
  return (
    <FooterContainer>
      <FooterLeft>
        <p>What are you waiting for ?</p>
        <h1>
          Try <StyledLink to="/"> Cuurve</StyledLink> Now
        </h1>
      </FooterLeft>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  height: 200px;
  z-index: 50;
  align-items: center;
  padding: 25px 25px;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  font-family: "Basier Circle Medium";
  letter-spacing: -0.025rem;
  font-size: 16px;
  line-height: 24px;
  color: rgb(25, 28, 31);
  font-style: normal;

  /* Normal Theming */

  background-color: #fff;
  border-bottom: 1px solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;

  h1 {
    cursor: pointer;
  }

  h2 {
    color: rgb(22, 82, 240);
    cursor: pointer;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    padding-bottom: 20px;
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
