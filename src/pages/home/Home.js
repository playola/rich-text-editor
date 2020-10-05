import React from 'react';
import { Container, Card, StyledLink, Label } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <StyledLink to="/draftjs">
        <Card background="draftJsPrimary">
          <Label color="white">DraftJs</Label>
        </Card>
      </StyledLink>
      <StyledLink to="/slatejs">
        <Card background="slateJsPrimary">
          <Label color="black">SlateJs</Label>
        </Card>
      </StyledLink>
    </Container>
  );
};

export default Home;
