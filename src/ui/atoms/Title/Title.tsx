import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './Title.module.css';
import { ROUTERS } from '@/constants/routers';
import { ArrowIcon, Icon } from '../icons';

interface IProps {
  title: string;
  hasDropdown?: boolean;
  icon: string;
}

const Title = (props: IProps) => {
  const { title, hasDropdown = true, icon } = props;
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useOnClickOutside(detailsRef, () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  });

  return (
    <details className={styles.details} ref={detailsRef}>
      <summary className={styles.title}>
        <Icon html={icon} />
        <h1>{title}</h1>
        {hasDropdown && <Icon html={ArrowIcon} style={{ rotate: '90deg' }} />}
      </summary>
      {hasDropdown && (
        <div className={styles.content}>
          {ROUTERS.slice(1).map((path) => {
            const { href, title } = path;
            return (
              <Link key={href} className={styles.link} href={href}>
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </details>
  );
};

export default Title;
