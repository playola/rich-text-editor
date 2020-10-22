import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.lightPrimary};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  padding: 32px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 16px;
  text-align: center;
  background-color: ${({ theme, background }) => theme[background] || 'white'};

  &:hover {
    background-color: ${({ theme, background }) => theme[`${background}Lighten`] || '#eee'};
  }
`;

export const StyledLink = styled(Link)`
  font-size: 32px;
  text-decoration: none;
`;

export const Label = styled.span`
  font-size: 64px;
  font-family: fantasy;
  color: ${({ color }) => color || 'black'};
`;
