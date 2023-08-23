import React from 'react'

function CompletedTodoItem(props) {

  function deleteClicked() {
    props.deleteTodo(props.id);
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.date_completed}</p>
      <button onClick={deleteClicked}>DELETE</button>
    </li>
  )
}

export default function CompletedTodos({ todos, deleteTodo }) {
  let filteredTodos = todos.filter(function (el) {
    return el.is_completed === 1;
  });

  const CompletedTodosJsx = filteredTodos.map(listItem => 
    <CompletedTodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description}
      date_completed={listItem.date_completed}
      deleteTodo={deleteTodo} />
  );

  return <ul>{CompletedTodosJsx}</ul>;
}
