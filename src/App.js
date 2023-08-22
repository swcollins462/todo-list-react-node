import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://p39zj3-8080.csb.app/api/todos')
      .then(x => x.json())
      .then(response => {
        setTodos(response);
      })
  }, []);

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      <main>
        <TodoForm />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}

export default App;
