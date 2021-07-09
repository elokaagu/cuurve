import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  @media ${device.mobile} {
    display: hide;
  }
`;
