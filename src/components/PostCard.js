import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import { Link } from "gatsby";

function PostCard({ title, excerpt, author, slug }) {
  return (
    <PostCardContainer>
      <PostCardImage />
      <PostCardText>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <span>{author}</span>
      </PostCardText>
    </PostCardContainer>
  );
}

export default PostCard;

const PostCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 500px;
  width: 400px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.08),
    0 0.5rem 0.75rem rgba(0, 0, 0, 0.14);
  margin: 0 20px 40px;
  background: #fff 50%;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const PostCardImage = styled.img`
  object-fit: contain;
  height: 250px;
  background-image: url(https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80);

  background-image: url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostCardText = styled.div`
  font-family: "Basier Circle Regular";
  text-align: left;
  padding: 20px;
  height: 250px;

  h2 {
    letter-spacing: -0.1rem;
    padding-bottom: 15px;
  }

  p {
    font-family: Roboto, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI",
      Arial, sans-serif;
    font-size: 16px;
    color: rgb(139, 149, 158);
    text-align: left;
    padding-bottom: 15px;
  }
`;
