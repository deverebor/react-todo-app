import { EmptyState } from './components/EmptyState/EmptyState';
import { TodoInfo } from './components/TodoInfo/TodoInfo';
import { Tasks } from './components/Tasks/Tasks';
import { Dispatch, SetStateAction, useState } from 'react';

interface TaskProps {
  task: string[];
  setTask: Dispatch<SetStateAction<string[]>>;
}

export function TodoTasks({task, setTask}: TaskProps) {
  const [completedTasks, setCompletedTask] = useState<string[]>([]);

  function deleteTask(taskToDelete: string) {
    const tasksWhitoutDeleted = task.filter(tasks => {
      return tasks !== taskToDelete;
    });

    setTask(tasksWhitoutDeleted);
  }

 function completedTask(taskToComplete: string) {
    const tasksWithCompleted = completedTasks.concat(taskToComplete);
    setCompletedTask(tasksWithCompleted);
  }


  return (
    <main>
      <TodoInfo
        taskAmount={task}
        completedTasks={completedTasks}
        />
      {task.length == 0 && 
        <EmptyState />
      }
      {task.map(task => {
        return (
          <Tasks 
            key={task}
            content={task}
            onDeleteTask={deleteTask}
            onCompleteTask={completedTask}
          />
        )
      })}
    </main>
  );
}