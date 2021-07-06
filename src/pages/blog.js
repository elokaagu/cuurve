import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import HeroComponent from "../components/HeroComponent";
import { Link } from "gatsby";

// let posts = data.allSanityPost.nodes.map((post) => {
//   return {
//     slug: post.slug.current,
//   };
// });
// console.log(rawPosts);

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
                title="How to do well in real estate, using Cuurve as the aim"
                excerpt="This is an excerpt of the article"
                author="Eloka"
              />
              <PostCard
                title="This is the first title"
                excerpt="This is an excerpt of the article"
                author="Cuurve Team"
              />
              <PostCard
                title="Back to the future: Crypto and the Economy"
                excerpt="The crypto economy is still in its early stages of growth. From the days of Satoshi Nakamoto through to the bull run of 2020, it's a space that continues to heat up."
                author="Eloka Agu"
              />
            </PostCardRow>
            <PostCardRow>
              <PostCard
                title="How to do well in real estate, using Cuurve as the aim"
                excerpt="This is an excerpt of the article"
                author="Eloka"
              />
              <PostCard
                title="This is the first title"
                excerpt="This is an excerpt of the article"
                author="Cuurve Team"
              />
              <PostCard
                title="This is the first title"
                excerpt="This is an excerpt of the article"
                author="Eloka Agu"
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
`;

const PostCardRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(25, 28, 31);

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
