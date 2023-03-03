import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Title = ({ text, style, ...props }: any) => {
  return (
    <StyledTitle style={style} {...props}>
      {text}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  display: flex;
  text-align: left;
  color: ${colors.black};
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

export default Title;
