import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import HeroComponent from "../components/HeroComponent";
import { device } from "../styles/breakpoints";

export default function blog({ data }) {
  console.log(data);
  return (
    <div>
      <title>Blog | Cuurve</title>
      <AppContainer>
        <Header />
        <AppBody>
          <HeroComponent
            title="Blog"
            subtitle="Follow the Cuurve blog for product announcements, feature updates, and technical posts about real estate and marketing."
          />
          <BlogContent>
            <PostCardRow>
              <PostCard
                title="Is Tik Tok the future of real estate?"
                excerpt="We live in a world that is constantly changing, with newer media channels emerging as the key value drivers across the ecosystem."
                author="Cuurve Team"
              />
            </PostCardRow>
          </BlogContent>
        </AppBody>
      </AppContainer>
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        body {
          children {
            text
          }
        }
        _id
        publishedDate(formatString: "")
        categories {
          title
        }
      }
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

  h1 {
    width: 80%;
  }
`;

const BlogContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;

  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const PostCardRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media ${device.laptop} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
