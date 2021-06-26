import React from "react";
import styled from "styled-components";

function HeaderOption({ title }) {
  return (
    <HeaderOptionContainer>
      <HeaderOptionTitle>
        <span>{title}</span>
      </HeaderOptionTitle>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;

const HeaderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  cursor: pointer;
  font-size: 17px;
`;

const HeaderOptionTitle = styled.div`
  span {
    :hover {
      color: #555;
    }
  }
`;
