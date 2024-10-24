/* eslint-disable react/display-name */
import { useCallback, useEffect } from 'react';
import styles from './Balance.module.css';
import { fetchBalance } from '@/services';
import { useWalletContext } from '@/contexts/WalletContext';

export const Balance = () => {
  const { address, balance, setBalance } = useWalletContext();

  const fetchBalanceData = useCallback(async () => {
    if (!address) return;

    const fetchedBalance = await fetchBalance(address);
    setBalance(fetchedBalance);
  }, [address, setBalance]);

  useEffect(() => {
    if (address) {
      fetchBalanceData();
    }
  }, [address, fetchBalanceData]);

  return (
    <div className={styles.wrapper}>
      {address ? (
        <>
          {balance !== null && !isNaN(balance) && (
            <p className={styles.balance}>{balance.toFixed(9)} TON</p>
          )}
          <p className={styles.caption}>Your balance</p>
        </>
      ) : (
        <div className={styles.text}>Please connect to your wallet...</div>
      )}
    </div>
  );
};
