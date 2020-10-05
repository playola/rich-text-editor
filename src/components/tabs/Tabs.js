import React from 'react';
import { Nav, Tab, StyledLink } from './Tabs.styles';

const Tabs = () => (
  <Nav>
    <StyledLink to="/draftjs" color="white">
      <Tab background="draftJsPrimary">
        DraftJs
      </Tab>
    </StyledLink>
    <StyledLink to="/slatejs" color="black">
      <Tab background="slateJsPrimary">
        SlateJs
      </Tab>
    </StyledLink>
  </Nav>
);

export default Tabs;
