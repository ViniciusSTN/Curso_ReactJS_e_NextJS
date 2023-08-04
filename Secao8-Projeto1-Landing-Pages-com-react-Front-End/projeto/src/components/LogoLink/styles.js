import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit; // herda do título

    > img {
      max-height: 2.1rem;
    }
  `}
`;