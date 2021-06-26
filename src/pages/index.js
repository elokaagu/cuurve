import * as React from "react";
import Header from "../components/Header";
import HomepageHero from "../sections/HomepageHero";
import "./index.css";
import styled from "styled-components";
import InfoSection from "../sections/InfoSection";

function index(props) {
  return (
    <div>
      <title>Next</title>
      <AppContainer>
        <Header />
        <AppBody>
          <HomepageHero />
          <InfoSection />
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
  height: 100%;
  background-image: url("https://drive.google.com/uc?export=view&id=1CBDqGNu6sj8ROS3FzrDAFenTzK8I14Ix");
  /* background-image: url("https://drive.google.com/uc?export=view&id=1ATV6mYscFeIXNwbGGm1ob4xNctQ613WD"); */
  /* background-image: url("https://drive.google.com/uc?export=view&id=1__PKetgqR0UomMhFkQJc1a-d1-rMkisR"); */
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  width: 100%;
  background-color: whitesmoke;
  border-bottom: none;
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;
