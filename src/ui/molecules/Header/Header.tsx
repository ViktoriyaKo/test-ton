'use client';
import { useTonConnectUI } from '@tonconnect/ui-react';
import styles from './Header.module.css';
import { Icon, WalletIcon, TonIcon } from '@/ui/atoms';
import { Balance } from '@/packages/components';


interface IProps {
  title: string;
  address: string | null | undefined;
}

const Header = (props: IProps) => {
  const { title, address } = props;
  const [tonConnectUI] = useTonConnectUI();
  const isConnected = !!address;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.title}>
          <Icon html={WalletIcon} />
          <h1>{title}</h1>
        </div>
        <button
          className={styles.button}
          onClick={() =>
            isConnected ? tonConnectUI.disconnect() : tonConnectUI.openModal()
          }
        >
          <Icon html={TonIcon} />
          {isConnected ? 'Disconect' : 'Connect'} Wallet
        </button>
      </nav>
      <Balance address={address} />
    </header>
  );
};

export default Header;
