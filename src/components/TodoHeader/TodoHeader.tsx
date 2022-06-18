import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoButton } from './components/TodoButton/TodoButton';

import styles from './TodoHeader.module.scss';

export function TodoHeader() {
  return (
    <header className={styles.todo}>
      <TodoInput />
      <TodoButton />
    </header>
  );
}