'use client';
import { createContext, useContext, useState } from 'react';
import { Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react'; // Импортируйте нужные типы
import { useTonWallet } from '@tonconnect/ui-react';

interface WalletContextType {
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  address: string | undefined;
  balance: number | null;
  setBalance: (arg: number) => void;
}

export const WalletContext = createContext<WalletContextType | null>(null);

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const wallet = useTonWallet();
  const address = wallet?.account.address;
  const [balance, setBalance] = useState<number | null>(null);

  const contextValue = { wallet, address, balance, setBalance };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};

export default WalletProvider;
