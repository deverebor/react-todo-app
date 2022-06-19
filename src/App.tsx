import { Header } from './components/Header/Header';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { TodoTasks } from './components/TodoTasks/TodoTasks';
import { useState } from 'react';

import styles from './App.module.scss';

import './styles/global.module.scss';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTasks, setNewTasks] = useState<string>('');
  
  return (
    <div className={styles.todo}>
      <Header />
      <div className={styles.todo__content}>
        <TodoHeader 
          task={tasks} 
          setTask={setTasks}
          newTask={newTasks}
          setNewTask={setNewTasks}
        />
        <TodoTasks 
          task={tasks} 
          setTask={setTasks}
        />
      </div>
    </div>
  )
}

export default App
