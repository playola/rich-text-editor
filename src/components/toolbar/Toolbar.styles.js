import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ bottomspacing }) => bottomspacing?.toString() === 'true' ? '16px' : '0px'};
`;
