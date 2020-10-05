import React from 'react';
import { Nav, StyledLink } from './Tabs.styles';

const Tabs = () => (
  <Nav>
    <div>
      <StyledLink to="/">Home</StyledLink>
    </div>
    <div>
      <StyledLink to="/draftjs">DraftJs</StyledLink>
    </div>
    <div>
      <StyledLink to="/slatejs">SlateJs</StyledLink>
    </div>
  </Nav>
);

export default Tabs;
