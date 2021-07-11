import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "gatsby";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { device } from "../../styles/breakpoints";

function post(props) {
  return (
    <>
      <title>Blog | Cuurve</title>
      <AppContainer>
        <Header />
        <AppBody>
          <PostContainer>
            <IconButton>
              <StyledLink to="/blog">
                <ArrowBackIcon />
              </StyledLink>
            </IconButton>

            <PostHeader>
              <h1>Is Tik Tok the future of real estate?</h1>
              <p>Cuurve Team</p>
            </PostHeader>
            <FeatureImage src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80" />
            <PostText>
              <p>
                <b>
                  We live in a world that is constantly changing. Social media
                  has reinvented how we communicate about and discover things in
                  a variety of ways. As a result, social media has radically
                  shifted the way business is conducted too. Facebook and
                  instagram are classic channels that marketers have used to a
                  great degree to generate traffic and gain leads. However,
                  newer media channels such as TikTok are emerging as the key
                  value drivers across the ecosystem.
                </b>
              </p>

              <p>
                TikTok is an easy-to-use video creation app that’s available to
                all users globally for mobile users. The app provides users with
                different effects, filters, sound bites, and music. It offers
                various ways for users to create a wide range of videos tailored
                to any message they wish to get across. Videos can range in
                length from 15 seconds to 60 seconds long.
              </p>

              <h2>What does this mean for real estate agents ?</h2>

              <p>
                As for real estate agents, the mobile app features a collection
                of tools capable of editing and filtering informative
                advertisement content and reach a broad client base. With
                TikTok, you don’t need to be a software guru to run the show.
                Just create a piece of relevant and relatable content and see
                your business attract new customers.
              </p>

              <p>
                There are many reasons why estate agents should brand themselves
                on TikTok. In the US alone, the app has 14 million active users
                every month who spend approximately 47 minutes on the app. About
                50% of the users in the US fall between the age group of 18 and
                34 years. Additional 20% fall between 35 and 44 years, which is
                the prime age group of buying homes. Similarly, 37% of the users
                have a household income of more than $100k, making them the
                prime target for real estate agents.
              </p>

              <h2>How should agents use TikTok ?</h2>

              <p>
                There numerous ways that real estate agents can utilize TikTok
                to advertise their properties. The simple mobile app can enable
                you to:
                <br />
                <br />
                <b>Show Your Customers the Interior, and Exterior:</b>
                <br />
                <br />
                TikTok is a platform that uses videos. Real estate agents can
                use this tool to showcase the designs and transformations of the
                houses you are selling is a great idea. You can record a short
                virtual tour of the interior and the exterior of the property
                and share it on the platform.
                <br />
                <br />
                <b>Networking With Others In the Industry:</b>
                <br />
                <br />
                As a real estate agent, the deeper you network, the more deals,
                knowledge, and money you make. If you dream of making huge
                money, connect and follow with reputable real estate TikTok
                veterans.
                <br />
                <br />
                <b>Offer Your Expertise:</b>
                <br />
                <br />
                As a real estate agent, use TikTok to offer tips and golden
                hacks in the sector and respond to frequently asked queries.
              </p>
              <p>
                If you'd like to learn more, or have a free strategy call with
                our team, feel free to reach out to Cuurve and get started.
              </p>
            </PostText>
          </PostContainer>
        </AppBody>
      </AppContainer>
    </>
  );
}

export default post;

const PostContainer = styled.div`
  padding-bottom: 100px;

  @media ${device.mobile} {
    width: 300px;
  }
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
  position: relative;
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

    @media ${device.mobile} {
      font-size: 30px;
      width: 300px;
    }
  }

  p {
    font-size: 30px;
    font-family: "Basier Circle Medium";
    color: rgb(0, 112, 243);
    padding-bottom: 50px;

    @media ${device.mobile} {
      font-size: 20px;
      width: 300px;
    }
  }
`;

const FeatureImage = styled.img`
  object-fit: contain;
  width: 700px;
  padding-bottom: 50px;

  @media ${device.mobile} {
    width: 300px;
  }
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

    @media ${device.mobile} {
      width: 300px;
    }
  }

  h2 {
    font-size: 30px;
    letter-spacing: -0.1rem;
    font-family: "Basier Circle Medium";
    color: rgb(25, 28, 31);
    padding-bottom: 50px;
    align-items: left;
    text-align: left;

    @media ${device.mobile} {
      width: 300px;
    }
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
