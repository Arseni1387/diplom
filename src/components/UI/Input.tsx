import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Input = ({ style, text, ...props }: any) => {
  return (
    <StyledInput style={style} {...props}>
      {text}
    </StyledInput>
  );
};

const StyledInput = styled.input`
  display: flex;
  font-size: 15px;
  padding: 12px;
  margin-top: 12px;
  border: 1px solid ${colors.lightGray};
  border-radius: 6px;
  &:focus {
    outline-color: ${colors.blue};
  }
`;

export default Input;
