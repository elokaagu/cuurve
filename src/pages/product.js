import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import InfoBanner from "../components/InfoBanner";
import InfoCard from "../components/InfoCard";

function product(props) {
  return (
    <div>
      <title>Product | Cuurve</title>
      <AppContainer>
        <Header />
        <AppBody>
          <InfoRow>
            <InfoCard
              headline="Build your brand to the moon"
              subtitle=" No hidden fees, just ease - forever"
              button="Learn more"
            />
            <InfoCard
              headline="This is another card"
              subtitle=" Let's theme this one too"
              button="Learn more"
            />
          </InfoRow>
          <InfoBanner
            headline="This is a banner "
            subtitle=" Let's theme this one too"
            button="Learn more"
          />
          <InfoRow>
            <InfoCard
              headline="Build your brand to the moon"
              subtitle=" No hidden fees, just ease - forever"
              button="Learn more"
            />
            <InfoCard
              headline="This is another card"
              subtitle=" Let's theme this one too"
              button="Learn more"
            />
          </InfoRow>
        </AppBody>
      </AppContainer>
    </div>
  );
}

export default product;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* background-image: url("https://drive.google.com/uc?export=view&id=1CBDqGNu6sj8ROS3FzrDAFenTzK8I14Ix"); */
  /* background-image: url("https://drive.google.com/uc?export=view&id=1ATV6mYscFeIXNwbGGm1ob4xNctQ613WD"); */
  /* background-image: url("https://drive.google.com/uc?export=view&id=1__PKetgqR0UomMhFkQJc1a-d1-rMkisR"); */
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  width: 100%;
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

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;
