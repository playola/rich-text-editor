import styled from 'styled-components';

export const MarkButtonWrapper = styled.div`
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.active : 'black'};
`;
