import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Button = ({ text, style, ...props }: any) => {
  return (
    <StyledButton style={style} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 12px;
  margin-top: 18px;
  background: ${colors.blue};
  color: ${colors.white};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;

export default Button;
