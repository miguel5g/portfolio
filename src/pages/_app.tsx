import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
};

export default App;
