import styles from './TodoInfo.module.scss';

export function TodoInfo() {
  return (
    <header className={styles.todo}>
      <p className={styles.todo__created}>
        Tarefas Criadas <span className={styles.todo__counter}>0</span>
      </p>
      <p className={styles.todo__completed}>
        Concluídas <span className={styles.todo__counter}>0</span>
      </p>
    </header>
  );
}