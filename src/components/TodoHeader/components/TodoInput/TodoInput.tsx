import { ChangeEventHandler } from 'react';
import styles from './TodoInput.module.scss';

interface TaskInputProps {
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
}

export function TodoInput({ value, change }: TaskInputProps) {
  
  return(
    <div className={styles.todo}>
      <input
        className={styles.todo_input}
        type="text"
        value={value}
        onChange={change}
        placeholder="Adicione uma nova tarefa"
      />
    </div>
  );
}