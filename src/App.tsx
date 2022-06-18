import { Header } from './components/Header/Header';
import { TodoHeader } from './components/TodoHeader/TodoHeader';

import styles from './App.module.scss';

import './styles/global.module.scss';

function App() {

  return (
    <div className={styles.todo}>
      <Header />
      <div className={styles.todo__header}>
        <TodoHeader />
      </div>
    </div>
  )
}

export default App
