import React from "react";

import styled from "styled-components";

// another way of creating components with embedded styles(supports SASS)
const Footer = styled.footer`
  /* dummy styles */
  background: #333;
  color: #fff;
  border: 1px solid #333;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export default () => {
  return <Footer>I'm a footer</Footer>;
};
