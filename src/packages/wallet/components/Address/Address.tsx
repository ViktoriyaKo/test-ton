import { CopyIcon, Icon } from '@/ui/atoms';
import styles from './Address.module.css';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface IProps {
  address: string | null | undefined;
}

export const Address = (props: IProps) => {
  const { address } = props;

  const copyAddress = useCallback(() => {
    if (address) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          toast('Address is copied!');
        })
        .catch((err) => {
          console.error('Ошибка при копировании адреса:', err);
        });
    }
  }, [address]);

  return (
    address && (
      <section className={styles.wrapper}>
        <p className={styles.caption}>Your address:</p>
        <button onClick={copyAddress} className={styles.address}>
          <span>{address}</span>
          <Icon html={CopyIcon} />
        </button>
      </section>
    )
  );
};
