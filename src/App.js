import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import SelectorButtons from './components/SelectorButtons';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

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

  const markCompleted = (id, is_completed, date_completed) => {
    fetch('https://p39zj3-8080.csb.app/api/todos/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        is_completed,
        date_completed
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    }).then(loadData);
  }

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <SelectorButtons
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted} />
        {showCompleted
          ? <CompletedTodos todos={todos} deleteTodo={deleteTodo} />
          : <TodoList todos={todos} deleteTodo={deleteTodo} markCompleted={markCompleted} />
        }
      </main>
    </div>
  );
}

export default App;
