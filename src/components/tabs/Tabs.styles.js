import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
`;

export const Tab = styled.div`
  padding: 32px 0;
  background-color: ${({ theme, background }) => theme[background] || 'white'};

  &:hover {
    background-color: ${({ theme, background }) => theme[`${background}Lighten`] || '#eee'};
  }
`;

export const StyledLink = styled(Link)`
  width: 50%;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
  color: ${({ color }) => color || 'black'};
`;
