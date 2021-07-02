import React from "react";
import styled from "styled-components";

function Description({ title, text, image }) {
  return (
    <DescriptionContainer>
      <DescriptionText>
        <h1>{title}</h1>
        <p>{text}</p>
      </DescriptionText>
      <DescriptionImage src={image} />
    </DescriptionContainer>
  );
}

export default Description;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 30px;
  height: 350px;
`;

const DescriptionText = styled.div`
  position: relative;
  word-break: break-word;
  h1 {
    font-family: "Basier Circle Semibold";
    font-size: 30px;
    font-weight: 100;
    letter-spacing: -0.05rem;
    margin-bottom: 20px;
    overflow-wrap: break-word;
    padding-bottom: 10px;
    color: rgb(25, 28, 31);
    white-space: pre-wrap;
    word-break: break-word;
  }
  p {
    font-family: Roboto, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI",
      Arial, sans-serif;
    color: rgb(139, 149, 158);
    width: 60%;
    line-height: 1.4;
    font-size: 18px;
    padding-bottom: 20px;
  }
`;

const DescriptionImage = styled.img`
  object-fit: contain;
  height: 350px;
  border-radius: 30px;
`;
