import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.mainBg};
    `}
  }
`;

// -------------------------------------------------------
export const H2 = styled.h2`
  color: red;
`;

// -------------------------------------------------------
// é possivel fazer uma função que retorna estilos css do theme dentro de um componente
const changeBackground = (theme) => css`
  background: ${({ theme }) => theme.colors.mediumGray};
  color: #fff;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${changeBackground(theme)}
  `}
`;

// -------------------------------------------------------
// ou então atribuir diretamente
export const Container2 = styled.div`
  background: ${({ theme }) => theme.colors.cyan};

  ${({ theme, padd }) => css`
    color: ${theme.colors.green};
    padding: ${padd};
  `}

  // é possivel alterar algum componente ou tag filho desse componente
  // OBS: os outros H2 não serão alterados, apenas o que é filho de Container2
  ${H2} {
    color: blue;
  }
`;

// -------------------------------------------------------
// é possivel herdar outro componente e fazer alterações
export const Container3 = styled(Container)`
  color: ${({ theme }) => theme.colors.blue}
`;

// -------------------------------------------------------

// é possivel herdar e alterar atributo de tag do componente
// Container4 é um article e não div
export const Container4 = styled(Container2).attrs({ as: 'article' })`
  color: ${({ theme }) => theme.colors.green};
  margin: 20px;

  /* & se reperefe ao Container4 nesse caso, ou seja, está selecionando H2 que seja filho de Container4 */
  /* OBS: isso é redundante, pois se deixar sem & da na mesma */

  /* Os seletores de css funcionam normalmente */
  /* > (Filho direto) */
  & > ${H2}:hover {
    color: pink;
  }

  &:hover {
    background: purple;
  }
`;
