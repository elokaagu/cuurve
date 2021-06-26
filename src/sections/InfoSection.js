import React from "react";
import styled from "styled-components";

function InfoSection(props) {
  return (
    <InfoContainer>
      <InfoText>
        <h1>Free case studies for new clients</h1>
        No hidden fees, just ease
      </InfoText>
    </InfoContainer>
  );
}

export default InfoSection;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 30px;
  height: 400px;
  background-color: rgb(25, 28, 31);
  border-radius: 30px;
`;

const InfoText = styled.div`
  font-family: "Basier Circle Medium";
  box-sizing: border-box;
  font-weight: 100;
  font-size: 1.0625rem;
  line-height: 1.411764705882353;
  letter-spacing: -0.025em;
  color: rgb(6, 102, 235);
  position: relative;
  white-space: pre-wrap;
  font-size: 20px;
  margin-top: 50px;
  word-break: break-word;
  h1 {
    font-size: 34px;
    line-height: 40px;
    font-weight: 100;
    letter-spacing: -0.1rem;
    overflow-wrap: break-word;
    padding-bottom: 10px;
    /* color: rgb(25, 28, 31); */
    color: #fff;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
