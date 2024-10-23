import { useCallback, useEffect, useState } from 'react';
import styles from './Balance.module.css';
import { fetchBalance } from '@/services';

interface IProps {
  address: string | null | undefined;
}

export const Balance = (props: IProps) => {
  const { address } = props;

  const [balance, setBalance] = useState<number>(0);

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
    address && (
      <div className={styles.wrapper}>
        <p className={styles.balance}>$ {balance}</p>
        <p className={styles.caption}>Your balance</p>
      </div>
    )
  );
};
