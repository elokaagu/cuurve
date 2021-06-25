import React from "react";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";

function Header(props) {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo
          src="https://cdn.freelogovectors.net/svg07/revolut-logo.svg"
          alt="logo"
        />
      </HeaderLeft>
      <HeaderCenter>
        <HeaderOption title="Personal" />
        <HeaderOption title="Business" />
        <HeaderOption title="Company" />
      </HeaderCenter>
      <HeaderRight>
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
  padding: 10px 20px;
  height: 50px;
  justify-content: space-evenly;
  background-color: transparent;
  border-bottom: 1px solid whitesmoke;
  box-shadow: 10px;
  width: 100%;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 30px;
  margin-right: 20px;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
