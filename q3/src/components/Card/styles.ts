import styled from 'styled-components';

export const Wrapper = styled.div<Q3.Card.Wrapper>`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: ${({ width }) =>
    typeof width === 'number' ? `${width}%` : width || 'auto'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}%` : height || 'auto'};
  padding: 1rem;
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
  color: ${({ theme }) => theme.colors.text};
`;
