import { PlusCircle } from 'phosphor-react'
import styles from './TodoButton.module.scss'

interface TodoButtonProps {
  createTask: () => void;
}

export function TodoButton({ createTask }: TodoButtonProps) {
  return(
    <div className={styles.todo}>
      <button
        onClick={createTask}
        className={styles.todo__button}
        >
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  );
}