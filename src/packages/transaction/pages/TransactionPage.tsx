'use client';

import { Header } from '@/ui/molecules';
import { useTonWallet } from '@tonconnect/ui-react';
import { TransactionIcon } from '@/ui/atoms';
import { Form } from '../components';
import styles from '../styles/TransactionPage.module.css';

const TransactionPage = () => {
  const wallet = useTonWallet();
  const address = wallet?.account.address;

  return (
    <section className={styles.container}>
      <Header title={'Transaction'} address={address} icon={TransactionIcon} />
      {address && <Form />}
    </section>
  );
};

export default TransactionPage;
