import { EmptyState } from './components/EmptyState/EmptyState';
import { TodoInfo } from './components/TodoInfo/TodoInfo';
import { Tasks } from './components/Tasks/Tasks';

const todo = [1, 2, 3];

export function TodoTasks() {
  return (
    <main>
      <TodoInfo />
      {todo.length == 0 && 
        <EmptyState />
      }
      {todo.map(task => {
        return (
          <Tasks key={task} />
        )
      })}
    </main>
  );
}