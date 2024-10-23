'use client';
import { useTonWallet } from '@tonconnect/ui-react';
import { Header } from '@/ui/molecules';
import { Address } from '@/packages/components';

const WalletPage = () => {
  const wallet = useTonWallet();
  const address = wallet?.account.address;

  return (
    <>
      <Header title={'Wallet'} address={address} />
      <Address address={address} />      
    </>
  );
};

export default WalletPage;
