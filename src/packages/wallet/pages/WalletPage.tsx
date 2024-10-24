'use client';
import { Address } from '@/packages/wallet/components';
import { useWalletContext } from '@/contexts/WalletContext';

const WalletPage = () => {
  const { address } = useWalletContext();

  return <Address address={address} />;
};

export default WalletPage;
