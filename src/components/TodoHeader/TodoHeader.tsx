import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoButton } from './components/TodoButton/TodoButton';

import styles from './TodoHeader.module.scss';
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface TaskProps {
  task: string[];
  setTask: Dispatch<SetStateAction<string[]>>;
  newTask: string;
  setNewTask: (task: string) => void;
}

export function TodoHeader({task, setTask, newTask, setNewTask}: TaskProps) {

  function handleCreateNewTask(event: InputEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
    setNewTask('');
  }

  function handleNewCommentTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  return (
    <header className={styles.todo}>
      <TodoInput value={newTask} change={handleNewCommentTaskChange} />
      <TodoButton createTask={handleCreateNewTask} />
    </header>
  );
}