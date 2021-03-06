import React from "react";
import styled from "styled-components";
import InfoBanner from "../components/InfoBanner";
import InfoCard from "../components/InfoCard";
import Layout from "../components/Layout";
import { device } from "../styles/breakpoints";

function product(props) {
  return (
    <div>
      <title>Product | Cuurve</title>
      <Layout>
        <AppContainer>
          <AppBody>
            <InfoRow>
              <InfoCard
                headline="High quality leads delivered straight to your phone"
                subtitle="No hassle, just ease"
                button="Learn more"
                // backgroundImage="https://storage.googleapis.com/cuurveimages/helixblur.jpg"
                // backgroundPosition="top"
                subtitleColor="rgb(25, 28, 31)"
                backgroundColor="whitesmoke"
                headlineColor="rgb(25, 28, 31)"
              />
              <InfoCard
                headline="Premium branding and social assets for your listing"
                subtitle="Simple, and effective"
                button="Learn more"
              />
            </InfoRow>
            <InfoBanner
              headline="Smart ads"
              subtitle="Bringing social media to life"
              button="Case studies"
              backgroundImage="https://storage.googleapis.com/cuurveimages/smoke-smart-ads.jpg"
              backgroundPosition="top"
              headlineColor="black"
              subtitleColor="rgb(6, 102, 235)"
            />
            <InfoRow>
              <InfoCard
                headline="Custom lead nurturing campaigns"
                subtitle="From drip funnels to email campaigns, it's on us"
                button="Learn more"
              />
              <InfoCard
                headline="Detailed stats on reach and conversion"
                subtitle="Let your budget do the work, and watch the results"
                button="Preview"
                subtitleColor="rgb(25, 28, 31)"
                backgroundColor="whitesmoke"
                headlineColor="rgb(25, 28, 31)"
              />
            </InfoRow>
          </AppBody>
        </AppContainer>
      </Layout>
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

  @media ${device.mobile} {
    padding: 2rem 0px;
  }
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

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
