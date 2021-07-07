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
              image="https://a0.muscache.com/im/pictures/4bac6f05-928e-433c-8440-c992a72e9b44.jpg?im_w=1200"
            />
            <Description
              title="Our location"
              text="We are building tools to empower real estate professionals with
          everything they need to market their business and listings. Today, we
          focus on providing marketing solutions and software tools to help our
          customers in the UK and USA maintain an advantage over the
          competition. Tomorrow, we will do so all over the world."
              image="https://a0.muscache.com/im/pictures/4bac6f05-928e-433c-8440-c992a72e9b44.jpg?im_w=1200"
            />
            <Description
              title="Still have questions?"
              text="We are building tools to empower real estate professionals with
          everything they need to market their business and listings. Today, we
          focus on providing marketing solutions and software tools to help our
          customers in the UK and USA maintain an advantage over the
          competition. Tomorrow, we will do so all over the world."
              image="https://a0.muscache.com/im/pictures/4bac6f05-928e-433c-8440-c992a72e9b44.jpg?im_w=1200"
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
