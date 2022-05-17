import type { AppProps } from 'next/app';

import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const Analytics = dynamic(() => import('../components/Analytics'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Analytics />
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
};

export default App;
