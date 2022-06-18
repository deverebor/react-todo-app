import { PlusCircle } from 'phosphor-react'
import styles from './TodoButton.module.scss'

export function TodoButton() {
  return(
    <div className={styles.todo}>
      <button className={styles.todo__button}>
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  );
}