import React from 'react'

function TodoItem(props) {

  function deleteClicked() {
    props.deleteTodo(props.id);
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={deleteClicked}>DELETE</button>
    </li>
  )
}

export default function TodoList({ todos, deleteTodo }) {
  const TodosJsx = todos.map(listItem => 
    <TodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description}
      deleteTodo={deleteTodo} />
  );

  return <ul>{TodosJsx}</ul>;
}
