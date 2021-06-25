import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import "./index.css";
import styled from "styled-components";

function index(props) {
  return (
    <div>
      <title>Agency</title>
      <AppContainer>
        <Header />
        <AppBody>
          <HeroSection />
        </AppBody>
      </AppContainer>
    </div>
  );
}

export default index;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;
