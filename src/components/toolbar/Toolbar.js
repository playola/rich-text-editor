import React from 'react';
import { Wrapper } from './Toolbar.styles';

const Toolbar = ({ children, bottomspacing }) => (
  <Wrapper bottomspacing={bottomspacing}>
    {children}
  </Wrapper>
);

export default Toolbar;
