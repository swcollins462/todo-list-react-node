import React from 'react'

function TodoItem(props) {

  function deleteClicked() {
    props.deleteTodo(props.id);
  }

  function completedClicked() {
    const isCompleted = 1;
    const dateCompleted = Date.now();
    props.markCompleted(props.id, isCompleted, dateCompleted)
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={deleteClicked}>DELETE</button>
      <button onClick={completedClicked}>COMPLETED</button>
    </li>
  )
}

export default function TodoList({ todos, deleteTodo, markCompleted }) {
  let filteredTodos = todos.filter(function (el) {
    return el.is_completed !== 1;
  });

  const TodosJsx = filteredTodos.map(listItem => 
    <TodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description}
      deleteTodo={deleteTodo}
      markCompleted={markCompleted} />
  );

  return <ul>{TodosJsx}</ul>;
}
