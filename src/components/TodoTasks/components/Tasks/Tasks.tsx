import { Trash } from "phosphor-react";

import styles from "./Tasks.module.scss";

interface TasksProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onCompleteTask: (task: string) => void;
}

export function Tasks({ content, onDeleteTask, onCompleteTask }: TasksProps) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCompleteTask() {
    onCompleteTask(content);
  }

  return (
    <article className={styles.tasks}>
      <div className={styles.tasks__content}>
        <div className={styles.tasks__content_checkbox}>
          <input
            className={styles.tasks__content_checkbox_block}
            onChange={handleCompleteTask}
            type="checkbox"
          />
        </div>
        <p className={styles.tasks__content_paragraph}>
          {content}
        </p>
      </div>
      <button
        onClick={handleDeleteTask}
        className={styles.tasks__trash}
      >
        <Trash
          size={24}
          color="#808080"
        />
      </button>
    </article>
  );
}