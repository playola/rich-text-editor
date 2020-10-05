import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 32px 16px;
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;
