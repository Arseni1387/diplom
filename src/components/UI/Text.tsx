import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

const Text = ({ text, link, style, ...props }: any) => {
  return (
    <StyledText style={style} {...props}>
      {text}
      {link && <NewLink href={props.myHref}>{( "\u00A0"+ props.linkText)}</NewLink>}
    </StyledText>
  );
};

const StyledText = styled.div`
  display: flex; 
  max-width: 400px;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  color: ${colors.lightGray};
  font-weight: 400;
  line-height: 28px;
  font-size: 18px;
`;

const NewLink = styled.a`
  color: ${colors.blue};
  text-decoration: none;
`;

export default Text;
