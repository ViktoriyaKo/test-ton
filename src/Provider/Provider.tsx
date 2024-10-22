'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactNode } from 'react';

const Provider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};

export default Provider;
