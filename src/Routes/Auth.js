import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div``;

export default () => {
  const [action, setAction] = useState("logIn");
  return (
    <Wrapper>
      <Box>box</Box>
    </Wrapper>
  );
};
