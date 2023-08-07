import styled, { css } from 'styled-components';

const titleSize = {
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xhuge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${(props) => css`
    color: ${
      props.colordark
        ? props.theme.colors.darkColor
        : props.theme.colors.whiteColor
    };
    ${titleSize[props.size](props.theme)};
    ${titleCase(props.uppercase)};
  `}
`;
