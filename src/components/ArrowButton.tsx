import React from "react";
import styled from "styled-components";
import Text from "./UI/Text";

const ArrowButton = ({ onClick }: any) => {
  return (
    <StyledArrowBack onClick={onClick}>
      <StyledImg src="https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png" />
      <Text text="Back" />
    </StyledArrowBack>
  );
};

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
`;

const StyledArrowBack = styled.button`
  display: flex;
  position: absolute;
  left: 10px;
  top: 10px;
  align-self: flex-start;
  margin-right: auto;
  border: 0;
  background: transparent;

  cursor: pointer;
  :hover {
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
    border-radius: 10px;
  }
`;

export default ArrowButton;
