import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Label = ({ text, style,  ...props }: any) => {
  return (
    <StyledLabel style={style}  {...props}>
      {text}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: flex;
  margin-top: 12px;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  color: ${colors.grey};
  font-weight: 500;
  line-height: 19px;
  font-size: 16px;
`;

export default Label;
