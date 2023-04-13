import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    outline: none;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    #root,
    html,
    body {
      height: 100vh;
    }

    button {
      cursor: pointer;
      background: none;
      border: 0;
    }

    a {
      text-decoration: none;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  `}

`;

export default GlobalStyles;
