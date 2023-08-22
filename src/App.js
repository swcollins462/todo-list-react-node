import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const loadData = () => {
    fetch('https://p39zj3-8080.csb.app/api/todos')
    .then(x => x.json())
    .then(response => {
      setTodos(response);
    });
  };

  useEffect(loadData, []);

  const addTodo = (title, description) => {
    fetch('https://p39zj3-8080.csb.app/api/todos/new', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'cors'
    }).then(loadData);
  }

  const deleteTodo = (id) => {
    fetch('https://p39zj3-8080.csb.app/api/todos/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'cors',
    }).then(loadData);
  };

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
}

export default App;
