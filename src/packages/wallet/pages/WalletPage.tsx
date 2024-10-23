'use client';
import { useTonWallet } from '@tonconnect/ui-react';
import { Header } from '@/ui/molecules';
import { Address } from '@/packages/wallet/components';
import { WalletIcon } from '@/ui/atoms';

const WalletPage = () => {
  const wallet = useTonWallet();
  const address = wallet?.account.address;

  return (
    <>
      <Header title={'Wallet'} address={address} icon={WalletIcon} />
      <Address address={address} />
    </>
  );
};

export default WalletPage;
