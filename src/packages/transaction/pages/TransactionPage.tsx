'use client';

import { Form } from '../components';
import styles from '../styles/TransactionPage.module.css';
import { useWalletContext } from '@/contexts/WalletContext';

const TransactionPage = () => {
  const { address } = useWalletContext();

  return <section className={styles.container}>{address && <Form />}</section>;
};

export default TransactionPage;
