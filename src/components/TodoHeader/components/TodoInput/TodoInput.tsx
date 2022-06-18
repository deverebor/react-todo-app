import styles from './TodoInput.module.scss';

export function TodoInput() {
  return(
    <div className={styles.todo}>
      <input
        className={styles.todo_input} 
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
    </div>
  );
}