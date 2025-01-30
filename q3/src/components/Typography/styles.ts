import styled from 'styled-components';

export const variantMapping: { h1: string; h2: string; body1: string } = {
  h1: 'h1',
  h2: 'h2',
  body1: 'p',
};

export const Body1 = styled.p<Q3.Typography.Props>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;

export const H1 = styled.h1<Q3.Typography.Props>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;

export const H2 = styled.h2<Q3.Typography.Props>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;
