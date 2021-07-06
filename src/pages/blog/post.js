import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "gatsby";

function post(props) {
  return (
    <>
      <title>Blog | Crypto</title>
      <AppContainer>
        <Header />
        <AppBody>
          <PostContainer>
            <PostHeader>
              <h1>Back to the future: Crypto and the Economy</h1>
              <p>Eloka Agu</p>
            </PostHeader>
            <FeatureImage src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80" />
            <PostText>
              <p>
                You, our amazing customers, are the reason that we do what we
                do. So we thought it was high time we showed you some love. And
                what says ‘love’ better than a boat-load of cash? £250,000 to be
                precise. And you can win it over the next 4 weeks.
              </p>

              <p>
                So, how do you get your hands on the cash? That’s where Points
                come in. Each point you earn will get you one entry into the
                weekly prize draw. Earning Points is easy, too. Take on our
                in-app challenges and spend with your card and they’ll add up
                fast. Please note: for now Points is only available in the UK.
              </p>

              <h2>For more information</h2>

              <p>
                So, how do you get your hands on the cash? That’s where Points
                come in. Each point you earn will get you one entry into the
                weekly prize draw. Earning Points is easy, too. Take on our
                in-app challenges and spend with your card and they’ll add up
                fast. Please note: for now Points is only available in the UK.
              </p>

              <p>
                So, how do you get your hands on the cash? That’s where Points
                come in. Each point you earn will get you one entry into the
                weekly prize draw. Earning Points is easy, too. Take on our
                in-app challenges and spend with your card and they’ll add up
                fast. Please note: for now Points is only available in the UK.
              </p>
            </PostText>
            <StyledLink to="/blog">Back</StyledLink>
          </PostContainer>
        </AppBody>
      </AppContainer>
    </>
  );
}

export default post;

const PostContainer = styled.div`
  padding-bottom: 100px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  width: 100%;
  border-bottom: none;
  align-items: center;
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  font-family: "Basier Circle Semibold";
  letter-spacing: -0.1rem;
  font-size: 16px;
  margin-top: 50px;
  flex-direction: column;

  h1 {
    font-size: 50px;
    cursor: pointer;
    width: 720px;
    font-weight: 500;
    line-height: 1.217;
    color: rgb(25, 28, 31);
    padding-bottom: 20px;
  }

  p {
    font-size: 30px;
    font-family: "Basier Circle Medium";
    color: rgb(0, 112, 243);
    padding-bottom: 50px;
  }
`;

const FeatureImage = styled.img`
  object-fit: contain;
  width: 700px;
  padding-bottom: 50px;
`;

const PostText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 20px;
    font-family: "Basier Circle Regular";
    color: rgb(25, 28, 31);
    /* color: rgb(126, 129, 134); */
    width: 720px;
    line-height: 1.5;
    letter-spacing: -0.1rem;
    padding-bottom: 30px;
  }

  h2 {
    font-size: 30px;
    letter-spacing: -0.1rem;
    font-family: "Basier Circle Medium";
    color: rgb(25, 28, 31);
    padding-bottom: 50px;
    align-items: left;
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
