import * as React from "react";
import HomepageHero from "../components/HomepageHero";
import "./index.css";
import styled from "styled-components";
import InfoBanner from "../components/InfoBanner";
import Layout from "../components/Layout";

function index(props) {
  return (
    <div>
      <title>Cuurve</title>
      <Layout>
        <AppContainer>
          <AppBody>
            <HomepageHero />
            <InfoBanner
              headline="Build your brand"
              subtitle="Stand out from other sellers and buyers"
              text="We use business information to create tailored premium marketing content, including social assets and automated posting."
              button="Try Cuurve"
            />
            <InfoBanner
              headline="Stand out from the noise"
              subtitle="Attract high quality leads with an intent to purchase"
              text="We use social ads and marketing materials to drive pre-qualified leads to listings in your local area with high conversion potential."
              button="Learn more"
            />
            <InfoBanner
              headline="Nurture your leads"
              subtitle="With custom drip funnels and email campaigns"
              text="Share quality content to create business opportunities and establish lasting relationships with prospective buyers and sellers."
              button="Talk to us"
            />
          </AppBody>
        </AppContainer>
      </Layout>
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
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: 100% 50%;
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
