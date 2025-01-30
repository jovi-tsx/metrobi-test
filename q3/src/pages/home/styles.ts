import styled from 'styled-components';

import { Wrapper as Container } from 'components/Container/styles';
import { Wrapper as Card } from 'components/Card/styles';

export const HomeContainer = styled(Container)`
  max-width: 900px;
  margin: auto;

  .page-content {
    flex-grow: 1;

    &,
    & > * {
      display: flex;
      gap: ${({ theme }) => theme.spacing(0.5)};
    }

    aside,
    main {
      flex: 1;
      flex-direction: column;
    }

    aside {
      flex-basis: 40%;
    }

    main {
      flex-basis: 60%;

      ${Card} {
        flex-grow: 1;

        &:nth-last-child(1) {
          flex-grow: 0.3;
        }
      }
    }
  }

  .related {
    display: flex;
    gap: ${({ theme }) => theme.spacing(0.5)};

    ${Card} {
      &:nth-child(1) {
        flex-basis: 80%;
      }

      &:nth-child(2) {
        flex-basis: 20%;
      }
    }
  }
`;
