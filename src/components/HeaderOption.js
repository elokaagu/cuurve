import React from "react";
import styled from "styled-components";

function HeaderOption({ title }) {
  return (
    <HeaderOptionContainer>
      <HeaderOptionTitle>
        <h4>{title}</h4>
      </HeaderOptionTitle>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;

const HeaderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: rgb(25, 28, 31);
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const HeaderOptionTitle = styled.div`
  font-size: 16px;
`;
