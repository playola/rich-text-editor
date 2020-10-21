import styled from 'styled-components';

const MARGIN_UNIT = 16;

const marginStyles = (margin) => {
  if (margin === 'all') return `margin: ${MARGIN_UNIT}px`;
  if (margin === 'top') return `margin-top: ${MARGIN_UNIT}px`;
  if (margin === 'right') return `margin-right: ${MARGIN_UNIT}px`;
  if (margin === 'bottom') return `margin-bottom: ${MARGIN_UNIT}px`;
  if (margin === 'left') return `margin-left: ${MARGIN_UNIT}px`;
  return 'margin: 0px';
};

export const IconWrapper = styled.span`
  ${({ margin }) => marginStyles(margin)}
`;
