import styled, { css } from 'styled-components';

const containerBgActivate = (theme) => css`
  background: ${theme.colors.darkColor};
  color: ${theme.colors.whiteColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.whiteColor};
    color: ${theme.colors.darkColor};

    ${background && containerBgActivate(theme)}

    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
