import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { device } from "../styles/breakpoints";
import { Link } from "gatsby";
import { ChevronRight } from "@material-ui/icons";

function Hamburger(props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <MenuContainer open={open}>
        <MenuLinks>
          <MenuLink>
            <StyledLink onClick={() => close()} to="/">
              Cuurve
              <ChevronRight />
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink onClick={() => close()} to="/product">
              Product
              <ChevronRight />
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink onClick={() => close()} to="/company">
              Company
              <ChevronRight />
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink onClick={() => close()} to="/blog">
              Blog
              <ChevronRight />
            </StyledLink>
          </MenuLink>
          <MenuLink>
            <StyledLink onClick={() => close()} to="/start">
              Get Started
              <ChevronRight />
            </StyledLink>
          </MenuLink>
        </MenuLinks>
      </MenuContainer>
    </>
  );
}

export default Hamburger;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 35px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 20; /* flex-flow: nowrap; */
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: rgb(25, 28, 31);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuContainer = styled.div`
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
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s ease-in-out;
    z-index: 10;
    background-color: whitesmoke;
  }
`;

const MenuLink = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);
  font-weight: 550;
  display: flex;
  font-size: 18px;

  .MuiSvgIcon-root {
    position: absolute;
    right: 40px;
  }
`;

const MenuLinks = styled.div`
  padding: 20px;
`;
