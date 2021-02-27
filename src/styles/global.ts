import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 1rem "Exo 2", sans-serif;
  }

  #__next, body {
    min-height: 100vh;
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
