import React from 'react'

function TodoItem(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default function TodoList({ todos }) {
  const TodosJsx = todos.map(listItem => 
    <TodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description} />
  );

  return <ul>{TodosJsx}</ul>;
}
