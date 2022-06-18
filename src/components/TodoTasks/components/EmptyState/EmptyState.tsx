import cliboardIcon from '../../../../assets/clipboard-icon.svg';

import styles from './EmptyState.module.scss';

export function EmptyState() {
  return (
    <main className={styles.emptystate}>
      <img
        className={styles.emptystate__icon}
        src={cliboardIcon}
        alt="Icone de uma prancheta representando suas tarefas"
      />
      <p className={styles.emptystate__title}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p className={styles.emptystate__subtitle}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </main>
  );
}