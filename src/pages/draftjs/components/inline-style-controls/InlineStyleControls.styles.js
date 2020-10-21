import styled from 'styled-components';

export const IconWrapper = styled.div`
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.active : 'black'};
`;
