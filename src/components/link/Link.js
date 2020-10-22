import React from 'react';
import { Wrapper } from './Link.styles';

const Link = ({ href, children }) => (
  <Wrapper href={href} target="_blank" rel="noopener noreferrer">
    <p>{children}</p>
  </Wrapper>
);

export default Link;
