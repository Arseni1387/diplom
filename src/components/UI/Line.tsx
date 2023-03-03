import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Line = () => {
  return <StyledLine />;
};

const StyledLine = styled.hr`
  border: 1px solid ${colors.line};
  margin-top: 12px;
`;

export default Line;
