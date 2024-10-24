'use client';
import { useTonConnectUI } from '@tonconnect/ui-react';
import styles from './Header.module.css';
import { Icon, ArrowIcon, TonIcon, Title } from '@/ui/atoms';
import { Balance } from '@/packages/wallet/components';
import { usePathname } from 'next/navigation';
import { ROUTERS } from '@/constants/routers';
import Link from 'next/link';
import { useWalletContext } from '@/contexts/WalletContext';

const Header = () => {
  const [tonConnectUI] = useTonConnectUI();
  const { address } = useWalletContext();

  const isConnected = !!address;
  const pathname = usePathname();
  const isTransactionPage = pathname.includes(ROUTERS[1].href);
  const currentPath = ROUTERS.find((router) => router.href === pathname);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {isTransactionPage && (
          <Link className={styles.back} href={ROUTERS[0].href}>
            <Icon html={ArrowIcon} />
          </Link>
        )}
        <Title
          title={currentPath?.title ?? ''}
          hasDropdown={!isTransactionPage}
          icon={currentPath?.icon ?? ''}
        />
        {!isTransactionPage && (
          <button
            className={styles.button}
            onClick={() =>
              isConnected ? tonConnectUI.disconnect() : tonConnectUI.openModal()
            }
          >
            <Icon html={TonIcon} />
            {isConnected ? 'Disconect' : 'Connect'} Wallet
          </button>
        )}
      </nav>
      <Balance address={address} />
    </header>
  );
};

export default Header;
