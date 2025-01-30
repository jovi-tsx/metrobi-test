import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(0.5)};
  gap: ${({ theme }) => theme.spacing(0.5)};

  @media (min-height: 575px) {
    height: 100dvh;
  }
`;
