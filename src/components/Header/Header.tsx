import rocketLogo from '../../assets/rocket-logo.svg';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={rocketLogo} alt="Logo em formato de foguete" />
      <p className={styles.header__title}>
        <span className={styles.header__title__todo}>to</span>do
      </p>
    </header>
  );
}