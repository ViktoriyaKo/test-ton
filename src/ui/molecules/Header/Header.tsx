'use client';
import { useTonConnectUI } from '@tonconnect/ui-react';
import styles from './Header.module.css';
import { Icon, ArrowIcon, TonIcon, Title } from '@/ui/atoms';
import { Balance } from '@/packages/wallet/components';
import { usePathname } from 'next/navigation';
import { ROUTERS } from '@/constants/routers';
import Link from 'next/link';
import { useEffect } from 'react';

interface IProps {
  title: string;
  icon: string;
  address: string | null | undefined;
}

const Header = (props: IProps) => {
  const { title, address, icon } = props;
  const [tonConnectUI] = useTonConnectUI();

  const isConnected = !!address;
  const pathname = usePathname();
  const isTransactionPage = pathname.includes(ROUTERS[1].href);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {isTransactionPage && (
          <Link className={styles.back} href={ROUTERS[0].href}>
            <Icon html={ArrowIcon} />
          </Link>
        )}
        <Title title={title} hasDropdown={!isTransactionPage} icon={icon} />
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
