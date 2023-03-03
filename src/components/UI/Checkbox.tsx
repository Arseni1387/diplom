import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

const Checkbox = ({ text }: any) => {
  return (
    <StyledCheckbox>
      <Input id={text} type="checkbox" />
      <Label htmlFor={text} style={{ paddingLeft: "5px" }} text={text} />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  display: flex;
`;

export default Checkbox;
