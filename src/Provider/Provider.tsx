'use client';

import ENDPOINTS from '@/constants/endpoints';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactNode } from 'react';

const Provider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <TonConnectUIProvider manifestUrl={ENDPOINTS.MANIFEST_URL}>
      {children}
    </TonConnectUIProvider>
  );
};

export default Provider;
