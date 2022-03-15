import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
