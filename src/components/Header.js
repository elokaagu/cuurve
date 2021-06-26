import React from "react";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";

function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo
          src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
          alt="logo"
        />
      </HeaderLeft>
      <HeaderCenter>
        <HeaderOption title="Products" />
        <HeaderOption title="Company" />
        <HeaderOption title="Blog" />
      </HeaderCenter>
      <HeaderRight>
        <HeaderOption title="Login" />
        <HeaderOption title="Sign in" />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
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

  /* Normal Theming */

  background-color: #fff;
  border-bottom: 1px solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;

  /* Revolut Theming */
  /* -webkit-backdrop-filter: blur(16px);
  background-color: rgba(243, 244, 245, 0.8);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 0px; */
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 20px;
  cursor: pointer;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
