import React from 'react';
import { Wrapper } from './ToolbarWrapper.styles';

const Toolbar = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Toolbar;
