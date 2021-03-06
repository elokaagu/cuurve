import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "../styles/breakpoints";
import Hamburger from "./Hamburger";

function Header(props) {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          {/* <Logo
          src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
          alt="logo"
        /> */}
          <h1>
            <StyledLink to="/"> Cuurve</StyledLink>
          </h1>
        </HeaderLeft>
        <HeaderCenter>
          <HeaderItem>
            <StyledLink to="/product">Product</StyledLink>
          </HeaderItem>
          <HeaderItem>
            <StyledLink to="/company">Company</StyledLink>
          </HeaderItem>
          <HeaderItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </HeaderItem>
        </HeaderCenter>
        <HeaderRight>
          <StyledLink to="/start">
            <HeaderButton>
              <span>Get started</span>
            </HeaderButton>
          </StyledLink>
        </HeaderRight>
        <MobileMenu>
          <Hamburger />
        </MobileMenu>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 15;
  align-items: center;
  padding: 25px 25px;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  font-family: "Basier Circle Medium";
  letter-spacing: -0.025rem;
  font-size: 16px;
  line-height: 24px;
  /* color: #fff; */
  color: rgb(25, 28, 31);
  font-style: normal;

  @media ${device.mobile} {
    justify-content: space-between;
  }

  /* Normal Theming */

  background-color: #fff;
  border-bottom: 1px solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;

  h1 {
    cursor: pointer;
    z-index: 30;
  }

  h2 {
    color: rgb(22, 82, 240);
    cursor: pointer;
  }

  /* Revolut Theming */
  /* -webkit-backdrop-filter: blur(16px);
  background-color: rgba(243, 244, 245, 0.8);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 0px; */
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

// const Logo = styled.img`
//   object-fit: contain;
//   height: 20px;
//   cursor: pointer;
// `;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    display: none;
  }

  @media ${device.mobile} {
    .MuiSvgIcon-root {
      display: flex;
    }
  }
`;

const HeaderItem = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  font-size: 17px;
  cursor: pointer;
  hover {
    color: #555;
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

const HeaderButton = styled.button`
  background-color: rgb(25, 28, 31);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: initial;
  transition-property: all;
  :hover {
    opacity: 80%;
  }

  span {
    font-family: "Basier Circle Medium";
    font-size: 17px;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media ${device.desktop} {
    display: none;
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
