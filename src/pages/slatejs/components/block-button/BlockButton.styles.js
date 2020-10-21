import styled from 'styled-components';

export const BlockButtonWrapper = styled.div`
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.active : 'black'};
`;
