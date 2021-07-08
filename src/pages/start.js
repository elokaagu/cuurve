import React from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

function start(props) {
  return (
    <>
      <title>Get Started | Cuurve</title>
      <AppContainer>
        <AppBody>
          <StartContainer>
            <Modal />
          </StartContainer>
        </AppBody>
      </AppContainer>
    </>
  );
}

export default start;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-attachment: scroll, scroll, scroll, scroll;
  background-clip: border-box, border-box, border-box, border-box;
  background-color: rgb(247, 250, 252);
  background-image: radial-gradient(
      92.81% 48.44% at -24.53% -16.02%,
      rgb(148, 60, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      75.78% 68.16% at 56.74% -24.02%,
      rgb(253, 157, 82) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      160.86% 46.39% at 177.14% -15.62%,
      rgb(221, 69, 211) 9.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    none;
  background-origin: padding-box, padding-box, padding-box, padding-box;
  background-position-x: 0%, 0%, 0%, 0%;
  background-position-y: 0%, 0%, 0%, 0%;
  background-size: auto, auto, auto, auto;
  bottom: 0px;
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
`;

const StartContainer = styled.div`
  display: flex;
  font-family: "Basier Circle Semibold";
  letter-spacing: -0.1rem;
  font-size: 16px;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`;
