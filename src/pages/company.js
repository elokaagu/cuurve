import React from "react";
import styled from "styled-components";
import HeroComponent from "../components/HeroComponent";
import Description from "../components/Description";
import Layout from "../components/Layout";

function company(props) {
  return (
    <div>
      <title>Company | Cuurve</title>
      <Layout>
        <AppContainer>
          <AppBody>
            <HeroComponent
              title="One tool for all things real estate"
              subtitle="From high quality lead generation and branding, to propsectve client
          nurturing tools, Cuurve helps real estate agents get more from their
          money"
            />
            <Description
              title="Who we are"
              text="We are building tools to empower real estate professionals with
          everything they need to market their business and listings. Today, we
          focus on providing marketing solutions and software tools to help our
          customers in the UK and USA maintain an advantage over the
          competition. Tomorrow, we will do so all over the world."
              image="https://storage.googleapis.com/cuurveimages/interior.jpg"
            />
            <Description
              title="Our location"
              text="We are based all around the world and specialise in connecting quality listings with hyper local audiences. In doing so we simplify the process of discovering properties in a way that is super simple and fun. Take advantage of this new opportunity and gain worldwide exposure for your high quality listings."
              image="https://storage.googleapis.com/cuurveimages/pixasquare-4ojhpgKpS68-unsplash.jpg"
            />
            <Description
              title="Still have questions?"
              text="Get in touch with our team if you have any questions about how Cuurve works, our product line and pricing plans. Simply fill out the Getting Started form and you'll be taken to a call with one of our customer service representatives, who will  help you start your journey."
              image="https://storage.googleapis.com/cuurveimages/family.jpg"
            />
          </AppBody>
        </AppContainer>
      </Layout>
    </div>
  );
}

export default company;

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
