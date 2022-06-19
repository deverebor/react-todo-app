import styles from './TodoInfo.module.scss';

interface TodoInfo {
  taskAmount: string[];
  completedTasks: string[];
}

export function TodoInfo({ taskAmount, completedTasks }: TodoInfo) {

  return (
    <header className={styles.todo}>
      <p className={styles.todo__created}>
        Tarefas Criadas <span className={styles.todo__counter}>{taskAmount.length}</span>
      </p>
      <p className={styles.todo__completed}>
        Concluídas <span className={styles.todo__counter}>{completedTasks.length} de {taskAmount.length}</span>
      </p>
    </header>
  );
}