import type { AppProps } from 'next/app';
import React from 'react';

import '../../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AnyComponent {...pageProps} />
  );
};

export default MyApp;
