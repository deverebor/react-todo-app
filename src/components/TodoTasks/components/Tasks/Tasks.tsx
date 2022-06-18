import { Trash } from "phosphor-react";

import styles from "./Tasks.module.scss";

export function Tasks() {
  return (
    <article className={styles.tasks}>
      <div className={styles.tasks__content}>
        <input
          className={styles.tasks__content_checkbox}
          type="checkbox"
        />
        <p className={styles.tasks__content_paragraph}>
          Lorem ipsum dolor sit, amet!
        </p>
      </div>
      <Trash
        className={styles.tasks__trash}
        size={24}
        color="#808080"
      />
    </article>
  );
}