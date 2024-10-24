import { useCallback, useEffect, useState } from 'react';
import styles from './Balance.module.css';
import { fetchBalance } from '@/services';

interface IProps {
  address: string | null | undefined;
}

export const Balance = (props: IProps) => {
  const { address } = props;

  const [balance, setBalance] = useState<number | null>(null);

  const fetchBalanceData = useCallback(async () => {
    if (!address) return;

    const fetchedBalance = await fetchBalance(address);
    setBalance(fetchedBalance);
  }, [address]);

  useEffect(() => {
    if (address) {
      fetchBalanceData();
    }
  }, [address, fetchBalanceData]);

  return (
    <div className={styles.wrapper}>
      {address ? (
        <>
          {balance !== null && (
            <p className={styles.balance}>{balance.toFixed(9)} ton</p>
          )}
          <p className={styles.caption}>Your balance</p>
        </>
      ) : (
        <div className={styles.text}>Please connect to your wallet...</div>
      )}
    </div>
  );
};
