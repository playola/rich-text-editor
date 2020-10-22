import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 16px;
`;
