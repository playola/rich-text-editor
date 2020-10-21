import React from 'react';
import { Wrapper } from './Toolbar.styles';

const Toolbar = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Toolbar;
