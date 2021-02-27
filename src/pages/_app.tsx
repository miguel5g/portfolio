import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={light}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
