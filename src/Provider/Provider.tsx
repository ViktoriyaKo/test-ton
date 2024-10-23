'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactNode } from 'react';

const Provider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
};

export default Provider;
